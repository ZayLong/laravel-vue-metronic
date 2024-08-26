<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InertiaEventController extends Controller
{

    public function show(): Response
    {
        Inertia::setRootView('welcome');
        $user_tho = [
            'id' => 1,
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
        ];



        return Inertia::render('App', [
            'incrementValue' => 45
//            'event' => $event->only(
//                'id',
//                'title',
//                'start_date',
//                'description'
//            ),
        ]);
    }

    public function getData(Request $request): string
    {
        $data = [
            'user' => $request->user(),
            'data' => $request->all(),
            'time' => time(),
            'random' => rand(1, 100),
        ];

        return  json_encode($data);
    }

}
