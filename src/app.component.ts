import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { NebulaPanelComponent } from './components/nebula-panel/nebula-panel.component.js';
import { NebulaService } from './services/nebula.service.js';
import { ToastService } from './services/toast.service.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NebulaPanelComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /** The only view mode — the operations (kanban) view. */
  currentViewMode = signal<'kanban'>('kanban');

  // The operations view's service surface, injected here so the root
  // component's dependency graph explicitly owns the ops services.
  readonly nebula = inject(NebulaService);
  readonly toast = inject(ToastService);
}