<?php
$busca= $_GET["busca"];
echo $busca;

$request = "https://api.vagalume.com.br/search.excerpt?apikey=660a4395f992ff67786584e238f501aa&q=$busca";
echo "<pre>";
$response = json_decode(file_get_contents($request), true);
print_r($response['response']['docs'][0]);

?>