import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GraficoColunaComponent } from '../../../../../commons/src/lib/components/grafico-coluna/grafico-coluna.component';
import { GraficoPizzaComponent } from '../../../../../commons/src/lib/components/grafico-pizza/grafico-pizza.component';
import { GraficoMedidorComponent } from '../../../../../commons/src/lib/components/grafico-medidor/grafico-medidor.component';
import { GraficoModel } from '../../../../../commons/src/lib/models/graficoModel';
import { PieData } from '../../model/mockPizza';
import { mockBarra } from '../../model/mockBarra';

@Component({
  selector: 'app-aba-financeiro-graficos',
  standalone: true,
  imports: [
    CommonModule,
    GraficoColunaComponent,
    GraficoPizzaComponent,
    GraficoMedidorComponent
  ],
  templateUrl: './aba-financeiro-graficos.component.html',
  styleUrl: './aba-financeiro-graficos.component.scss',
})
export class AbaFinanceiroGraficosComponent {
  piedata: GraficoModel[] = PieData.getData();
  bardata: GraficoModel[] = mockBarra.getData();

}
