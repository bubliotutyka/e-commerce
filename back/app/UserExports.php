<?php
namespace App;

use App\User;
use MaatWebsite\Excel\Concerns\FromCollection;

class UserExports extends FromCollection{
    public function collection(){
        $users = User::all();
    }
}