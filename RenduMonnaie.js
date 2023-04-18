function rendu_glouton(somme, rendu, indice) {
  const pieces = [100, 50, 20, 10, 5, 2, 1];
  if (somme == 0) {
    return rendu;
  } else if (somme >= pieces[indice]) {
    rendu.push(pieces[indice]);
    return rendu_glouton(somme - pieces[indice], rendu, indice);
  }
  return rendu_glouton(somme, rendu, indice + 1);
}