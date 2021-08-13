import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetivarPedidoComponent } from './efetivar-pedido.component';

describe('EfetivarPedidoComponent', () => {
  let component: EfetivarPedidoComponent;
  let fixture: ComponentFixture<EfetivarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfetivarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfetivarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
