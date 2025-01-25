import { Location } from '@angular/common';
import {
  DebugElement,
  Predicate
} from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  By
} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { faker } from '@faker-js/faker';

import { AppComponent } from './app.component';
import { routes } from './app.module';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { DomainListComponent } from './domain-list/domain-list.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  const get$ = {
    domainList: {
      get element(): DebugElement {
        const predicate: Predicate<DebugElement> = By.css('app-domain-list > section[role="main"] > table');

        return fixture.debugElement.query(predicate);
      },
      rows: {
        get columns(): string[][] {
          return get$.domainList.element.queryAll(By.css('tbody > tr')).map<string[]>((row: DebugElement): string[] => {
            return row.queryAll(By.css('td')).map<string>((column: DebugElement): string => {
              return column.nativeElement.textContent.trim();
            });
          });
        },
        get details(): DebugElement[] {
          return get$.domainList.element.queryAll(By.css('tbody > tr > td:last-child > a'));
        }
      }
    },
    domainDetails: {
      get element(): DebugElement {
        const predicate: Predicate<DebugElement> = By.css('app-domain-details > div.form');

        return fixture.debugElement.query(predicate);
      },
      fields: {
        get value(): string[] {
          return get$.domainDetails.element.queryAll(By.css('div.form-group')).map<string>((field: DebugElement): string => {
            return field.nativeElement.textContent.trim();
          });
        }
      }
    }
  };

  const set$ = {
    router: {
      set path(value: string) {
        router.navigateByUrl(value);

        tick();
        fixture.detectChanges();
      }
    }
  };

  const make$ = {
    router: {
      invalid: {
        get path(): string {
          return faker.random.word();
        }
      }
    },
    domainList: {
      rows: {
        get value(): string[][] {
          return [
            [
              'arstechnica.com',
              '01/15/2026',
              '$96.17/yr',
              'details'
            ],
            [
              'cargocollective.com',
              '12/28/2025',
              '$76.33/yr',
              'details'
            ],
            [
              'micronj.com',
              '05/26/2023',
              '$87.34/yr',
              'details'
            ],
            [
              'devhub.com',
              '12/01/2025',
              '$91.61/yr',
              'details'
            ],
            [
              'comcast.net',
              '04/16/2025',
              '$73.21/yr',
              'details'
            ],
            [
              'mail.io',
              '12/30/2025',
              '$41.08/yr',
              'details'
            ],
            [
              'olh.com.au',
              '01/23/2025',
              '$99.37/yr',
              'details'
            ],
            [
              'gle.com',
              '09/30/2023',
              '$50.01/yr',
              'details'
            ],
            [
              'usnews.com',
              '02/22/2024',
              '$35.13/yr',
              'details'
            ],
            [
              'networkadvertising.org',
              '09/29/2023',
              '$53.46/yr',
              'details'
            ],
            [
              'ameblo.jp',
              '05/20/2023',
              '$20.03/yr',
              'details'
            ],
            [
              'weebly.com',
              '07/11/2025',
              '$94.79/yr',
              'details'
            ],
            [
              'archive.org',
              '07/06/2023',
              '$44.49/yr',
              'details'
            ]
          ];
        }
      }
    },
    domainDetails: {
      get value(): { path: string, fields: string[] }[] {
        return [
          {
            path: '/domain/f95572a3-2e15-458a-8b7f-cfe925a822a4',
            fields: [
              'ID: f95572a3-2e15-458a-8b7f-cfe925a822a4',
              'Name: arstechnica.com',
              'Expiration: 01/15/2026',
              'Auto Renew: Yes',
              'Domain Privacy: No',
              'Renewal Price: $96.17/yr'
            ]
          },
          {
            path: '/domain/e9c32300-8ed7-47b3-bcb7-2ae6b65521c7',
            fields: [
              'ID: e9c32300-8ed7-47b3-bcb7-2ae6b65521c7',
              'Name: cargocollective.com',
              'Expiration: 12/28/2025',
              'Auto Renew: Yes',
              'Domain Privacy: No',
              'Renewal Price: $76.33/yr'
            ]
          },
          {
            path: '/domain/e8b14513-39b7-447a-ba60-a1d5a42c2bd8',
            fields: [
              'ID: e8b14513-39b7-447a-ba60-a1d5a42c2bd8',
              'Name: micronj.com',
              'Expiration: 05/26/2023',
              'Auto Renew: No',
              'Domain Privacy: No',
              'Renewal Price: $87.34/yr'
            ]
          },
          {
            path: '/domain/3f13c2d6-b086-4d45-b8c6-7f1093811791',
            fields: [
              'ID: 3f13c2d6-b086-4d45-b8c6-7f1093811791',
              'Name: devhub.com',
              'Expiration: 12/01/2025',
              'Auto Renew: Yes',
              'Domain Privacy: Yes',
              'Renewal Price: $91.61/yr'
            ]
          },
          {
            path: '/domain/3bc108ae-0afc-499c-8fba-19ca405af858',
            fields: [
              'ID: 3bc108ae-0afc-499c-8fba-19ca405af858',
              'Name: comcast.net',
              'Expiration: 04/16/2025',
              'Auto Renew: No',
              'Domain Privacy: No',
              'Renewal Price: $73.21/yr'
            ]
          },
          {
            path: '/domain/669b67ee-2cf9-4963-8ea7-052fdf743015',
            fields: [
              'ID: 669b67ee-2cf9-4963-8ea7-052fdf743015',
              'Name: mail.io',
              'Expiration: 12/30/2025',
              'Auto Renew: Yes',
              'Domain Privacy: No',
              'Renewal Price: $41.08/yr'
            ]
          },
          {
            path: '/domain/53404ac6-849b-42fc-87b7-77e2c25dd495',
            fields: [
              'ID: 53404ac6-849b-42fc-87b7-77e2c25dd495',
              'Name: olh.com.au',
              'Expiration: 01/23/2025',
              'Auto Renew: Yes',
              'Domain Privacy: No',
              'Renewal Price: $99.37/yr'
            ]
          },
          {
            path: '/domain/eda3708d-02f0-4376-8a7f-38376b3d9753',
            fields: [
              'ID: eda3708d-02f0-4376-8a7f-38376b3d9753',
              'Name: gle.com',
              'Expiration: 09/30/2023',
              'Auto Renew: No',
              'Domain Privacy: No',
              'Renewal Price: $50.01/yr'
            ]
          },
          {
            path: '/domain/3c063abf-0ee3-4809-a93e-fab18e071639',
            fields: [
              'ID: 3c063abf-0ee3-4809-a93e-fab18e071639',
              'Name: usnews.com',
              'Expiration: 02/22/2024',
              'Auto Renew: No',
              'Domain Privacy: Yes',
              'Renewal Price: $35.13/yr'
            ]
          },
          {
            path: '/domain/ecff6163-82d9-4394-a292-756012ff074e',
            fields: [
              'ID: ecff6163-82d9-4394-a292-756012ff074e',
              'Name: networkadvertising.org',
              'Expiration: 09/29/2023',
              'Auto Renew: No',
              'Domain Privacy: No',
              'Renewal Price: $53.46/yr'
            ]
          }
        ];
      }
    }
  };

  const help$ = {
    domainList: {
      row: {
        click(row: number): void {
          const link: DebugElement = get$.domainList.rows.details[row];

          link.triggerEventHandler('click', {
            button: 0
          });

          tick();
          fixture.detectChanges();
        }
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DomainListComponent,
        DomainDetailsComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture.detectChanges();
  });

  describe('Initially', () => {
    it('should display the domain list only', fakeAsync(() => {
      set$.router.path = '';

      `context: should display the domain list`;
      {
        const actual: DebugElement = get$.domainList.element;

        expect(actual).toBeTruthy();
      }

      `context: should not display the domain details`;
      {
        const actual: DebugElement = get$.domainDetails.element;

        expect(actual).toBeFalsy();
      }
    }));
  });

  describe('When the domain list is loaded', () => {
    it('should display all domains', fakeAsync(() => {
      set$.router.path = '';

      const actual: string[][] = get$.domainList.rows.columns;
      const expected: string[][] = make$.domainList.rows.value;

      expect(actual).toEqual(expected);
    }));
  });

  describe('When a details link is clicked', () => {
    it('should should display the appropriate domain details', fakeAsync(() => {
      const domainDetails: { path: string; fields: string[] }[] = make$.domainDetails.value;

      domainDetails.forEach((data: { path: string; fields: string[] }, index: number): void => {
        set$.router.path = '';

        help$.domainList.row.click(index);

        `context: should have "/domain/:id" path`;
        {
          const actual: string = location.path();
          const expected: string = data.path;

          expect(actual).toBe(expected);
        }

        `context: should have the appropriate domain details`;
        {
          const actual: string[] = get$.domainDetails.fields.value;
          const expected: string[] = data.fields;

          expect(actual).toEqual(expected);
        }
      });
    }));
  });

  describe('When the path is not correct', () => {
    it('should display the domain list', fakeAsync(() => {
      set$.router.path = make$.router.invalid.path;

      `context: should display the domain list`;
      {
        const actual: DebugElement = get$.domainList.element;

        expect(actual).toBeTruthy();
      }

      `context: should not display the domain`;
      {
        const actual: DebugElement = get$.domainDetails.element;

        expect(actual).toBeFalsy();
      }
    }));
  });
});
