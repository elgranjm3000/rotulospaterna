<?php
/**
 * Rótulos Paterna - Contact Form Handler
 * Envía los mensajes del formulario a contacto@rotulospaterna.com
 */

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['error' => 'Método no permitido']));
}

// CORS: permitir solo desde rotulospaterna.com
$allowed_origins = ['https://rotulospaterna.com', 'http://rotulospaterna.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Manejar preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Recoger y sanitizar datos
$name    = isset($_POST['name'])    ? trim(strip_tags($_POST['name']))    : '';
$email   = isset($_POST['email'])   ? trim(strip_tags($_POST['email']))   : '';
$phone   = isset($_POST['phone'])   ? trim(strip_tags($_POST['phone']))   : '';
$project = isset($_POST['projectType']) ? trim(strip_tags($_POST['projectType'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validar campos requeridos
$errors = [];
if (empty($name))    $errors[] = 'Nombre obligatorio';
if (empty($email))   $errors[] = 'Email obligatorio';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email no válido';
if (empty($project)) $errors[] = 'Tipo de proyecto obligatorio';
if (empty($message)) $errors[] = 'Detalles del proyecto obligatorios';

if (!empty($errors)) {
    http_response_code(400);
    die(json_encode(['error' => implode(', ', $errors)]));
}

// Construir el email
$to = 'contacto@rotulospaterna.com';
$subject = "Nuevo presupuesto: $project - $name";

$body = "=== NUEVA SOLICITUD DE PRESUPUESTO ===\n\n";
$body .= "Nombre:    $name\n";
$body .= "Email:     $email\n";
$body .= "Teléfono:  " . ($phone ?: 'No indicado') . "\n";
$body .= "Proyecto:  $project\n\n";
$body .= "Detalles:\n$message\n\n";
$body .= "---\n";
$body .= "Enviado desde rotulospaterna.com\n";
$body .= "Fecha: " . date('d/m/Y H:i') . "\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'desconocida') . "\n";

$headers  = "From: Rótulos Paterna <contacto@rotulospaterna.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el mensaje. Inténtalo de nuevo.']);
}
