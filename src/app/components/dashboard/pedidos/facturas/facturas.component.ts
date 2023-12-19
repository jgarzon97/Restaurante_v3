import { Component } from '@angular/core';
import { Factura, FacturasService } from 'src/app/services/pago/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  facturas: Factura[] = [];

  constructor(
    private facturoService : FacturasService,
  ) { }

  
  ngOnInit(): void {
    this.visualizar();
  }
  
  visualizar() {
    this.facturoService.getFactura().subscribe(response => {
      this.facturas = response;
    }, error => {
      console.log(error);
    });
  }

}
