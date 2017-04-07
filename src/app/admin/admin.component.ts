import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ MemberService ]
})
export class AdminComponent implements OnInit {
   updateCheckedRole;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, favoriteBook: string, totalRead: number, image: string) {
    let role = this.updateCheckedRole;
    console.log(role);
    let newMember: Member = new Member(name, role, favoriteBook, totalRead, image);
    this.memberService.addMember(newMember);
  }

  onChange(optionFromMenu: string) {
    this.updateCheckedRole = optionFromMenu;
  }
}
