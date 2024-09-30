import {environment} from "../environments/environment";
import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {ReactiveFormsComponent} from "@components/forms/reactive-forms/reactive-forms.component";
import {TemplateDrivenFormsComponent} from "@components/forms/template-driven-forms/template-driven-forms.component";
import {ContentComponent} from "@components/content/content.component";
import {HostElementsComponent} from "@components/host-elements/host-elements.component";
import {LifeCycleComponent} from "@components/life-cycle/life-cycle.component";
import {PaiOuMaeComponent} from "@components/comuniccao-entre-components/pai-ou-mae/pai-ou-mae.component";
import {AngularPipesComponent} from "@pipes/angular-pipes/angular-pipes.component";
import {ConsumeServiceComponent} from "@components/consume-service/consume-service.component";
import {RouterOutlet} from "@angular/router";
import {TranslateComponent} from "@components/translate/translate.component";
import {OutputComponent} from "@components/comuniccao-entre-components/output/output.component";
import {OptImageComponent} from "../assets/i18n/components/opt-image/opt-image.component";
import {AnimationsComponent} from "../assets/i18n/components/animations/animations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaiOuMaeComponent, AngularPipesComponent, ReactiveFormsComponent, TemplateDrivenFormsComponent, ContentComponent, HostElementsComponent, LifeCycleComponent, ConsumeServiceComponent, RouterOutlet, TranslateComponent, OutputComponent, OptImageComponent, AnimationsComponent],
  template: `
<!--    <router-outlet/>-->

    <!--    <h1>comunicação entre components</h1>-->

    <!--<app-pai-ou-mae />-->

    <!--    <app-angular-pipes/>-->

    <!--    <h1>tipos forms(drive and reactive)</h1>-->

    <!--    <app-template-driven-forms/>-->
    <!--    <app-reactive-forms/>-->

    <!--    <app-content>-->
    <!--      <header id="header">-->
    <!--        <p>header</p>-->
    <!--      </header>-->
    <!--      <p text >text</p>-->
    <!--      <p text >text</p>-->
    <!--      <p text >text</p>-->
    <!--      <footer class="footer">-->
    <!--        <p>footer</p>-->
    <!--      </footer>-->
    <!--      <app-content/>-->
    <!--    <app-host-elements/>-->

    <!--    @if (boolean) {-->
    <!--      <app-life-cycle [inputMyNumber]="myNumber()">-->
    <!--        <p #text>text</p>-->
    <!--      </app-life-cycle>-->
    <!--    }-->

    <!--    <button (click)="this.boolean = !this.boolean">destroy component</button>-->

    <!--    <app-consume-service/>-->

<!--    <app-translate/>-->

<!--<app-opt-image/>-->
<app-animations/>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'comunicacao-entre-components';
  myNumber = signal(1);
  public boolean = true;

  constructor() {
    console.log(environment.env)
  }

  ngOnInit(): void {
    setInterval(() => {
      this.myNumber.update((oldValue: number) => {
        return oldValue + 1
      })
    }, 1000)
  }

}
