/**
 * Metadados dinâmicos dos sermões de Spurgeon.
 * Baseado no Índice Cronológico do The Spurgeon Archive (romans45.org).
 * 
 * Volumes 1-6 (1855-1860) pertencem ao New Park Street Pulpit.
 * Volumes 7-63 (1861-1917) pertencem ao Metropolitan Tabernacle Pulpit.
 * O ano de publicação do volume segue a lógica (1854 + Volume).
 */

export function getMetadata(sermonNumber, volumeNumber) {
  const num = parseInt(sermonNumber, 10);
  const vol = parseInt(volumeNumber, 10);

  if (isNaN(vol)) {
    return null;
  }

  const isNewPark = vol <= 6;
  const year = 1854 + vol;

  const collectionName = isNewPark ? 'New Park Street Pulpit' : 'Metropolitan Tabernacle Pulpit';
  const location = isNewPark ? 'New Park Street Chapel, Southwark' : 'Metropolitan Tabernacle, Newington';

  return {
    sermonNumber: num,
    volumeLabel: `${collectionName} Volume ${vol}`,
    dateDisplay: `Year ${year}`,
    location: location,
  };
}
