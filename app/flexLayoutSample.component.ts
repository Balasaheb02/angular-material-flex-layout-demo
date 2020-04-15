import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import 'rxjs/add/operator/filter';
import { BreakPoint } from '@angular/flex-layout';

@Component({
  selector: 'flex-layout',
  styles: [`
    .element-style {
      width: 100%;
      background-color: gray;
    }

    .container-style {
      position: absolute;
    }
    `],
  template: `
    
    <div #flexLayoutContainer style="height: 100%;">
            <div class="container-style" fxLayout="row" [fxLayoutGap]="layoutGap" (window:resize)="onResize($event)" [ngStyle]="containerStyle" fxShow.md fxHide.lt-md>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
            </div>

            <div class="container-style" fxLayout="row" [fxLayoutGap]="layoutGap" (window:resize)="onResize($event)" [ngStyle]="containerStyle" fxHide.gt-sm fxHide.lt-sm fxShow.sm>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
            </div>

            <div class="container-style" fxLayout="row" [fxLayoutGap]="layoutGap" (window:resize)="onResize($event)" [ngStyle]="containerStyle" fxShow.xs fxHide.gt-xs>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
                <div class="element-style" [ngStyle]="elementStyle"></div>
            </div>
            
            <div fxLayout="column" [fxLayoutGap]="layoutGap">
                <mat-card fxFlex="100">
                    <span>1</span>
                    <button mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                </mat-card>
                <div fxLayout="row" fxLayout.lt-sm="column" fxFlex="100" [fxLayoutGap]="layoutGap">
                    <mat-card fxFlex="50">
                    <span>2</span>
                        <button mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                    </mat-card>
                    
                    <mat-card fxFlex="50">
                        <span>3</span>
                        <button mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                        <!-- div fxLayout="row">
                            <div fxFlex fxHide="false" fxHide.gt-sm> Shown on SMALL device size.<br> Hidden on devices greater than small (.gt-sm).
                            </div>
                            <div fxFlex fxHide="false" fxHide.gt-md> Shown on SMALL and MEDIUM size devices. (.gt-md)<br>
                            Hidden on gt-md devices.
                            </div>
                            <div fxFlex fxShow="false" fxShow.gt-sm> Only show on devices GREATER THAN SMALL (.gt-sm).</div>
                            <div fxFlex fxShow="false" fxShow.md> Shown on MEDIUM size devices only (.m).</div>
                            <div fxFlex fxShow="false" fxShow.gt-lg> Shown on devices GREATER THAN LARGE, 1200px wide (.gt-lg)
                            only.
                            </div>
                        </div -->
                    </mat-card>
                </div>
                <div fxLayout="row" fxLayout.lt-sm="column" fxFlex="100" [fxLayoutGap]="layoutGap">
                    <div fxLayout="row" fxFlex="50" [fxLayoutGap]="layoutGap">
                        <mat-card fxFlex="50">
                            <span>4</span>
                            <button fxHide.lt-md mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                        </mat-card>
                        <mat-card fxFlex="50">
                            <span>5</span>
                            <button fxHide.lt-md mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                        </mat-card>
                    </div>
                    <div fxLayout="row" fxFlex="50" [fxLayoutGap]="layoutGap">
                        <mat-card fxFlex="50">
                            <span>6</span>
                            <button fxHide.lt-md mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                        </mat-card>
                        <mat-card fxFlex="50">
                            <span>7</span>
                            <button fxHide.lt-md mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                        </mat-card>
                    </div>
                </div>
                <div fxLayout="row" fxFlex="100" [fxLayoutGap]="layoutGap" fxHide.lt-sm>
                    <mat-card fxFlex="75">
                        <span>8</span>
                        <button mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                    </mat-card>
                    <mat-card fxFlex="25">
                        <span>9</span>
                        <button mat-button (click)="openDocs()">FLEX-LAYOUT</button>
                    </mat-card>
                </div>
            </div>
        </div>
  `,
})
export class FlexLayoutSampleComponent {
  @ViewChild('flexLayoutContainer') flexLayoutContainerElement: ElementRef;

  public elementStyle: object = {
    'height.px': 20
  };

  public containerStyle: object = {
    'width.px': 256
  }

  public layoutGap: string = '24px';

  private breakpintObserver: BreakpointObserver;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
        breakpointObserver.observe([
            Breakpoints.XSmall,
        ]).subscribe((result: any) => {
            if (result.matches) {
                this.layoutGap = '8px';
            }
        });

        breakpointObserver.observe([
            Breakpoints.Small,
        ]).subscribe((result: any) => {
            if (result.matches) {
                this.layoutGap = '24px';
            }
        });

        breakpointObserver.observe([
            Breakpoints.Medium,
        ]).subscribe((result: any) => {
            if (result.matches) {
                this.layoutGap = '24px';
            }
        });
  }

  // public ngOnInit() {
  // }

  public ngAfterViewInit() {
    this.setSize();
  }

  public onResize($event: Event) {
    this.setSize();
  }

  public openDocs() {
    window.open('https://github.com/angular/flex-layout/', '_blank');
  }

  private setSize() {
    this.elementStyle['height.px'] = this.flexLayoutContainerElement.nativeElement.offsetHeight;
    this.containerStyle['width.px'] = this.flexLayoutContainerElement.nativeElement.clientWidth;
  }
}
