import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPlaylistComponent } from './tabla-playlist.component';

describe('TablaPlaylistComponent', () => {
  let component: TablaPlaylistComponent;
  let fixture: ComponentFixture<TablaPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
