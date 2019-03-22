@extends('public.layout')
@section('content')
<form id="formTest">

  <div class="form-group">
    <label for="mail">Email address</label>
    <input type="email" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter email">
  </div>

  <div id="errorsMail" role="alert"> 
  </div>

  <div class="form-group">
    <label for="pwd">Password</label>
    <input type="password" class="form-control" id="pwd" placeholder="Password">
  </div>

  <div id="errorsPwd" role="alert"> 
  </div>

  <div class="form-group">
  <label for="selector">Account</label>
  <select id="selector" class="form-control">
        <option value="">Select an accout type...</option>
        <option value="free">Free</option>
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>
  </div>
    
    <div id="errorsSelect" role="alert"> 
    </div>

  <div class="form-group">
    <label for="age">Age</label>
    <input type="text" class="form-control" id="age" placeholder="Age">
    <small class="form-text text-muted">Your age should be 18 or older.</small>
  </div>

  <div id="errorsAge" role="alert">
  </div>

<div class="form-group">
  <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="terms">
  <label class="custom-control-label" for="terms">I agree da terms</label>
</div>
</div>

  <div id="errorsTerms" role="alert"> 
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection

@push('scripts')
<script src="{{ mix('/js/validation.js') }}" defer ></script>
@endpush