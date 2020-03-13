import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private processedTextData: Subject<any> = new Subject();
  private searchText = '';
  private topicTypes: any = {};
  private riskGrades: any[] = [];

  private policyGuides: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private constantsService: ConstantsService
  ) {
    this.topicTypes = this.constantsService.topicTypes;
    this.riskGrades = this.constantsService.riskGrades;
  }

  processTextData(data: any, extended: boolean) {
    this.searchText = data.text;

    return this.http.post(`https://virtserver.swaggerhub.com/twohat/classifyText/2.0.1/classify/text?extended=${extended}`, data);
      // .subscribe((response: any) => {
      //   const filteredData = this.filterProcessedData(response);
      //   this.processedTextData.next(filteredData);
      // }, (error) => {
      //   console.log(error);
      // });
  }

  getSearchText() {
    return this.searchText;
  }

  subscribeProcessedTextData() {
    return this.processedTextData.asObservable();
  }

  private filterProcessedData(data) {
    const returnData: any = {
      filteredTextArray: [],
      predictions: [],
      topics: [],
      failingFragments: [],
      text: data.text
    };

    if (data.failingFragments) {
      data.failingFragments.map((x, index)=> {
        const failingData = {
          ...x,
          originalText: data.text.substring(x.startPos, x.endPos),
          topics: []
        }

        Object.keys(x.topics).map((key, id) => {
          failingData.topics.push({
            id: key,
            value: x.topics[key],
            color: this.riskGrades[x.topics[key]].color,
            icon: this.topicTypes[key].icon,
            name: this.topicTypes[key].name
          });
        });

        returnData.failingFragments.push(failingData);
      })
    }

    if (data.extended) {
      const filteredTextData: any = {};

      data.extended.map((token, index) => {
        if (filteredTextData[token.solution]) {
          filteredTextData[token.solution].originals.push(token.original);
          filteredTextData[token.solution].originalText += ' ' + token.original;
          token.tokens.map(x => {
            let isDuplicated = false;

            filteredTextData[token.solution].tokens.map(y => {
              if (x.text === y.text) {
                isDuplicated = true;
              }
            });

            if (!isDuplicated && x.text !== token.solution) {
              const tempTopics = [];
              Object.keys(x.topics).map(tp => {
                tempTopics.push({
                  id: tp,
                  value: x.topics[tp],
                  color: this.riskGrades[x.topics[tp]].color,
                  icon: this.topicTypes[tp].icon,
                  name: this.topicTypes[tp].name
                })
              });

              x.topics = tempTopics;

              filteredTextData[token.solution].tokens.push(x);
            }
          });
        } else {
          filteredTextData[token.solution] = {
            solution: token.solution,
            originals: [token.original],
            originalText: token.original,
            topics: [],
            tokens: [],
            solutionToken: {}
          };

          token.tokens.map(x => {
            const tempTopics = [];
            Object.keys(x.topics).map(tp => {
              tempTopics.push({
                id: tp,
                value: x.topics[tp],
                color: this.riskGrades[x.topics[tp]].color,
                icon: this.topicTypes[tp].icon,
                name: this.topicTypes[tp].name
              })
            });

            x.topics = tempTopics;

            if (x.text !== token.solution) {
              filteredTextData[token.solution].tokens.push(x);
            } else {
              filteredTextData[token.solution].solutionToken = x;
            }
          });
        }

        filteredTextData[token.solution].topics = filteredTextData[token.solution].solutionToken.topics;
      });

      returnData.filteredTextArray = Object.values(filteredTextData);
    }

    Object.keys(data.predictions).map((x) => {
      returnData.predictions.push({
        id: x,
        value: Math.round(data.predictions[x] * 100)
      });
    });

    Object.keys(data.topics).map((x) => {
      returnData.topics.push({
        id: x,
        value: data.topics[x],
        color: this.riskGrades[data.topics[x]].color,
        icon: this.topicTypes[x].icon,
        name: this.topicTypes[x].name
      })
    });

    return returnData;
  }

  getPolicyGuides () {
    return this.http.get(`https://virtserver.swaggerhub.com/Individual136/towhub/1.0.0/policy_groups`);
  }

  setPolicyGuides (data) {
    this.policyGuides.next(data);
  }
}
