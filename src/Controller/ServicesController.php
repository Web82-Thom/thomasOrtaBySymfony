<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ServicesController extends AbstractController
{
    #[Route('/services', name: 'services')]
    public function index(): Response
    {
        return $this->redirect($this->generateUrl('home') . '#services', 302);
    }
}
