import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
 members: FirebaseListObservable<any[]>;
 currentRoute: string = this.router.url;
 filterByRole: string = "allMembers";

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(member) {
    this.router.navigate(['members', member.$key]);
  }

  onChange(optionFromMenu: string) {
    this.filterByRole = optionFromMenu;
  }

  newQuote() {
    var randomNumber = Math.floor(Math.random() * (this.quotes.length));
    document.getElementById('quoteDisplay').innerHTML = this.quotes[randomNumber];
  }

  quotes = [
    "You're a wizard, Harry. - Hagrid",
    "We could all have been killed - or worse, expelled. - Hermione Granger",
    "Not my daughter, you bitch! - Mrs. Weasley",
    "Never trust anything that can think for itself if you can't see where it keeps its brain. -Mrs. Weasley",
    "There is no need to call me Sir, Professor. - Harry Potter",
    "Have a biscuit, Potter. - Professor McGonagall",
    "I solemnly swear I am up to no good. - Harry Potter",
    "We did it, we bashed them, wee Potter's the one, and Voldy's gone moldy so now let's have fun! - Peeves",
    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. - Albus Dumbledore",
    "One can never have enough socks. - Albus Dumbledore",
    "Eat Slugs! - Ron Weasley",
    "It does not do to dwell on dreams and forget to live. - Dumbledore",
    "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Dumbledore",
    "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. - Dumbledore",
    "It's wingardium leviOsa, not leviosAH. - Hermione Granger",
    "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are. -Sirius Black",
    "Oculus Reparo! -Hermione Granger"
  ]


}
