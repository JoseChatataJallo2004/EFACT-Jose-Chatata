import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CONSTANTES } from '../../../../Reutilizable/Constantes';
import { UtilsService } from '../../../../Reutilizable/utils.service';
import { DashBoardService } from '../../../../services/dash-board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  iframeUrl: SafeResourceUrl | null = null;
  constructor(
    private _dashboardService:DashBoardService,
    private _utilidadService:UtilsService,
    private sanitizer: DomSanitizer
  ){}

    verPdf() {
      this._dashboardService.descargarPdf().subscribe(
        (pdfBlob) => {
          const blob = new Blob([pdfBlob], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        },
        () => {
          this._utilidadService.mostrarAlerta(CONSTANTES.ERROR_DESCONOCIDO, "Opps");
        }
      );
    }

    verXml() {
      this._dashboardService.descargarXml().subscribe(
        (xmlBlob) => {
          const blob = new Blob([xmlBlob], { type: 'text/xml' });
          const url = URL.createObjectURL(blob);
          this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        },
        () => {
          this._utilidadService.mostrarAlerta(CONSTANTES.ERROR_DESCONOCIDO, "Opps");
        }
      );
    }

   verCdr() {
      this._dashboardService.descargarCdr().subscribe(
        (xmlBlob) => {
          const blob = new Blob([xmlBlob], { type: 'text/xml' });
          const url = URL.createObjectURL(blob);
          this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        },
        () => {
          this._utilidadService.mostrarAlerta(CONSTANTES.ERROR_DESCONOCIDO, "Opps");
        }
      );
    }
}
