<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class WeatherController extends AbstractController
{
    #[Route('/api/weather', name: 'api_weather')]
    public function weather(
        Request $request,
        HttpClientInterface $httpClient
    ): JsonResponse {
        $city = $request->query->get('city', 'montauban');

        $apiKey = $_ENV['OPENWEATHER_API_KEY'];

        $url = sprintf(
            'https://api.openweathermap.org/data/2.5/weather?q=%s&lang=fr&units=metric&appid=%s',
            urlencode($city),
            $apiKey
        );

        try {
            $response = $httpClient->request('GET', $url);
            $data = $response->toArray();

            return $this->json([
                'city' => $data['name'],
                'description' => $data['weather'][0]['description'],
                'icon' => $data['weather'][0]['icon'],
                'temp' => round($data['main']['temp']),
                'temp_max' => round($data['main']['temp_max']),
                'temp_min' => round($data['main']['temp_min']),
            ]);
        } catch (\Throwable $e) {
            return $this->json(
                ['error' => 'Ville introuvable ou erreur API'],
                404
            );
        }
    }
}
