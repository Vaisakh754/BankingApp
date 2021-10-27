import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfComponent } from './delete-conf.component';

describe('DeleteConfComponent', () => {
  let component: DeleteConfComponent;
  let fixture: ComponentFixture<DeleteConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
