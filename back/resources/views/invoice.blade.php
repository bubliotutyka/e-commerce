<!DOCTYPE html>
<html>
    <body>
        <div style="margin-top: ;display:inline-block;padding: 15px;border: solid 1px black; width: 300px;">
            @if(is_object($user) && null !== $user->UserInfo)
            <p>name: {{ $user->UserInfo->name }}</p>
            <p>lastname: {{ $user->UserInfo->lastname }}</p>
            <p>phone: {{ $user->UserInfo->phone }}</p>
            <p>adress: {{ $user->UserInfo->code_postal.' '.$user->UserInfo->ville }}</p>
            <p>{{ $user->UserInfo->voie }}</p>
            <p>{{ $user->UserInfo->pays }}</p>
            @elseif(is_string($user))
            <p>email: {{$user}}</p>
            @else
            <p>email: {{$user->email}}</p>
            @endif
        </div>
        <div style="float: right; display:inline-block;">
            <img src={{asset('images/inline-logo.png')}}>
        </div>
        <div style="margin-top: 15px;">
            @foreach($cart as $product)
            <div style="border-top: solid 1px black">
                @foreach($product as $key => $p)
                <p>{{$key.' : '.$p}}<p>
                @endforeach
            </div>
            @endforeach
        </div>
        <p style=" font-size: 20px; border-top: solid 1px black;">Total price: {{$total_price}}<p>
        <p>{{$step['step']}}<p>
    </body>
</html>