import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-conf',
  templateUrl: './delete-conf.component.html',
  styleUrls: ['./delete-conf.component.css']
})
export class DeleteConfComponent implements OnInit {
@Input() item:String|undefined
@Output() onDelete=new EventEmitter
@Output() onCancel=new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
delete(){
  this.onDelete.emit(this.item)
  alert("deleting...")
}
cancel(){
  this.onDelete.emit()
  alert("cancelling...")
}
}
