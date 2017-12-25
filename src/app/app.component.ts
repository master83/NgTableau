import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableauViz: any;

  constructor() {
  }

  ngOnInit() {
    const placeholderDiv = document.getElementById('tableauViz');
    const url = 'https://public.tableau.com/views/USTreasuryInterestRate/Sheet1?:embed=y&:display_count=yes';
    const options = {
      hideTabs: true,
      width: '800px',
      height: '700px',
      onFirstInteractive: function () {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);
  }
}
