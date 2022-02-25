import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunidadAutonomaPage } from './comunidad-autonoma.page';

describe('ComunidadAutonomaPage', () => {
  let component: ComunidadAutonomaPage;
  let fixture: ComponentFixture<ComunidadAutonomaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadAutonomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunidadAutonomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
