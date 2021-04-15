import {
    MatDialogModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
  } from "@angular/material";
  
  import { NgModule } from "@angular/core";
  
  
  const modules = [
    MatDialogModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule
  ];
  
  @NgModule({
    imports: [...modules],
    exports: [...modules],
    providers: [
    
    ],
    declarations: [],
    entryComponents: []
  })
  export class MaterialModule {}