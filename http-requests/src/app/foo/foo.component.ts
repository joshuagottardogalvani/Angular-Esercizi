import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from '../foo.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})

export class FooComponent implements OnInit {

    data: Object;
    loading: boolean;
    o: Observable<Object>;
    fooData : Foo[];
    oFoo : Observable<Foo[]>;

  constructor(public http: HttpClient) {}

  getData = (d : Object) => {
    this.data = new Object(d);
    this.loading = false;
  }

  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }

  makeCompactRequest(): void {
    this.loading = true;
    this.http
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }

  makeCompactPost(): void {
    this.loading = true;
    this.http
    .post('https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      })
    )

    .subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }

  makeTypedRequest() : void
  {
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }


  ngOnInit() {}

}
