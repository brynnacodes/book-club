import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [ MemberService ]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  updateCheckedRole;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
  this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to delete this member?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }

  onChange(optionFromMenu: string) {
    this.updateCheckedRole = optionFromMenu;
  }

}
