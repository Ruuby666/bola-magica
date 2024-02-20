import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaComponent } from './bola.component';
import { MessageComponent } from '../message/message.component';

describe('BolaComponent', () => {
  let component: BolaComponent;
  let fixture: ComponentFixture<BolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolaComponent, MessageComponent]
    });
    fixture = TestBed.createComponent(BolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
