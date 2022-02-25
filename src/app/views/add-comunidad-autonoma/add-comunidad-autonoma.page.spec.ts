import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddComunidadAutonomaPage } from './add-comunidad-autonoma.page';

describe('AddComunidadAutonomaPage', () => {
  let component: AddComunidadAutonomaPage;
  let fixture: ComponentFixture<AddComunidadAutonomaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComunidadAutonomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddComunidadAutonomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
