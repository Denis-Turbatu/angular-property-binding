import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGalleryComponent } from './food-gallery.component';

describe('FoodGalleryComponent', () => {
  let component: FoodGalleryComponent;
  let fixture: ComponentFixture<FoodGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
