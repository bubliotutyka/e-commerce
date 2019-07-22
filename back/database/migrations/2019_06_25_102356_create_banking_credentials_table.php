<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBankingCredentialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banking_credentials', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_id');
            $table->bigInteger('creditCardNumber');
            $table->dateTime('expiration');
            $table->string('ccv');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banking_credentials');
    }
}
