import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscapalavrachaveComponent } from './buscapalavrachave.component';

describe('BuscapalavrachaveComponent', () => {
  let component: BuscapalavrachaveComponent;
  let fixture: ComponentFixture<BuscapalavrachaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscapalavrachaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscapalavrachaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
