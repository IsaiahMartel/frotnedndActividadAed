import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateComunidadAutonomaPage } from './update-comunidad-autonoma.page';

describe('UpdateComunidadAutonomaPage', () => {
  let component: UpdateComunidadAutonomaPage;
  let fixture: ComponentFixture<UpdateComunidadAutonomaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComunidadAutonomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateComunidadAutonomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
