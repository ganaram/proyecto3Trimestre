@extends('public.layout')
@section('content')
<form id="formTest">
  <div class="form-group">
    <label for="mail">Email address</label>
    <input type="email" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="errorsMail"> 
  </div>
  <div class="form-group">
    <label for="pwd">Password</label>
    <input type="password" class="form-control" id="pwd" placeholder="Password">
  </div>
  <div class="errorsPwd"> 
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection