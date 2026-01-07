<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        $projects = [
            [
                'img' => 'images/webagency.jpg',
                'title' => 'WebAgency',
                'desc' => 'Site vitrine pour une agence Web',
                'url' => 'http://webagency.thomasorta.fr/',
            ],
            [
                'img' => 'images/velok31.jpg',
                'title' => 'VéloK 31',
                'desc' => 'Application location de vélos sur Toulouse',
                'url' => 'http://locationvelo.thomasorta.fr/',
            ],
            [
                'img' => 'images/jeanforteroche.jpg',
                'title' => 'Publier un livre',
                'desc' => 'Blog pour un écrivain',
                'url' => 'https://jeanforteroche.thomasorta.fr/',
            ],
            [
                'img' => 'images/thomasorta.jpg',
                'title' => 'Thomas ORTA',
                'desc' => 'Site vitrine Thomas ORTA',
                'url' => '#',
            ],
            [
                'img' => 'images/manoir.jpg',
                'title' => 'Manoir de la Gravette',
                'desc' => 'Site Maison d\'hôtes',
                'url' => 'https://manoirdelagravette.com/',
            ],
            [
                'img' => 'images/app_icon.png',
                'title' => 'Cleaning Schedule',
                'desc' => 'App Flutter, Web et Android Gestion atelier de nettoyage',
                'url' => 'https://cleaningsheduledemo.thomasorta.fr/',
                'apk' => '/downloads/apk/cleaning-schedule.apk',
            ],
            [
                'img' => 'images/officeireki.jpg',
                'title' => 'Ireki',
                'desc' => 'Office D\'Ireki, WordPress projet formation',
                'url' => 'https://officeirekiprojetformation.thomasorta.fr/',
            ],
            [
                'img' => 'images/app_icon_my_library.png',
                'title' => 'My library Flutter',
                'desc' => 'Présentation de ma librairie Flutter',
                'url' => 'https://my-library-flutter.thomasorta.fr/',
                'apk' => '/downloads/apk/my_library.apk',
            ],
        ];

        return $this->render('home/index.html.twig', [
            'title' => 'Conception Web Thomas ORTA',
            'projects' => $projects,
        ]);
    }
}
