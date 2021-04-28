import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accountsList:any=[];
  totalBalance:any=0;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.accountService.getAccountsList().subscribe(res=>{
      if(res!=null){
        this.accountsList=res;
        res.forEach(element => {
            this.totalBalance=this.totalBalance+parseFloat(element.balance);
        });
      }
    });
  }
  withDrawBal(list){
    if(list.balance>0){
      alert('Success');
    }
  }
}
