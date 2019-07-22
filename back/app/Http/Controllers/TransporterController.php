<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transporter;

class TransporterController extends Controller
{
    //
    public function create(Request $request){
        $toPush = $this->parseFromFront($request->all());
        return Transporter::create([
            'name' => $toPush['name'],
            'base_cost' => json_encode($toPush['base_cost']),
            'extra' => json_encode($toPush['extra']),
            'disponibility' => json_encode($toPush['disponibility']),
            'delivery_delay' => $toPush['delivery_delay'],
            'per_product' => $toPush['per_product'],
            'blacklist' => json_encode($toPush['blacklist'])
        ]);
    }
    public function delete($id){
        $transporter = Transporter::find($id);
        if(null !== $transporter){
            $transporter->delete();
        } else {
            return ['err' => 'transporter not found'];
        }
    }
    public function update($id, Request $request){
        $transporter = Transporter::find($id);
        if(null !== $transporter){
            $toPush = $this->parseFromFront($request->all());
            $transporter->name = $toPush['name'];
            $transporter->base_cost = json_encode($toPush['base_cost']);
            $transporter->extra = json_encode($toPush['extra']);
            $transporter->blacklist = json_encode($toPush['blacklist']);
            $transporter->per_product = $toPush['per_product'];
            $transporter->delivery_delay = $toPush['delivery_delay'];
            $transporter->disponibility = json_encode($toPush['disponibility']);
            $transporter->save();
            return $transporter;
        }
        return ['err' => 'transporter not found'];
    }
    public function getAll(){
        $temp = [];
        foreach(Transporter::all() as $transporter){
            $temp[] = $this->parseToFront($transporter);
        }
        return $temp;
    }
    public function readOne($id){
        $transporter = Transporter::find($id);
        if(null !== $transporter){
            return $this->parseToFront($transporter);
        }
        return ['err' => 'transporter not found'];
    }
    public function parseToFront($transporter){
        $temp = [];
        foreach(json_decode($transporter->base_cost) as $weight => $value){
            $temp['base_cost'][] = ['weight' => $weight, 'base_cost' => $value];
        }
        foreach(json_decode($transporter->extra) as $pays => $multiplier){
            if($multiplier !== null){
                $temp['extra'][] = ['pays' => $pays, 'multiplier' => $multiplier];
            } else {
                $temp['extra'] = null;
            }
        }
        $temp['blacklist'] = json_decode($transporter->blacklist);
        $temp['disponibility'] = json_decode($transporter->disponibility);
        $temp['id'] = $transporter->id;
        $temp['delivery_delay'] = $transporter->delivery_delay;
        $temp['per_product'] = $transporter->per_product;
        $temp['name'] = $transporter->name;
        return $temp;
    }
    public function parseFromFront($request){
        $temp = [];
        foreach($request as $key => $value){
            switch($key){
                case 'base_cost':
                foreach($request['base_cost'] as $b){
                    $temp['base_cost'][$b['weight']] = $b['base_cost'];
                }
                break;
                case 'extra':
                foreach($request[$key] as $p){
                    $temp[$key][$p['pays']] = $p['multiplier'];
                }
                break;
                default:
                $temp[$key] = $value;
            }
        }
        return $temp;
    }
}
