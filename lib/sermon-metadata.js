/**
 * Metadados dinâmicos dos sermões de Spurgeon.
 * Baseado no Índice Cronológico do The Spurgeon Archive (romans45.org).
 * 
 * Volumes 1-6 (1855-1860) pertencem ao New Park Street Pulpit.
 * Volumes 7-63 (1861-1917) pertencem ao Metropolitan Tabernacle Pulpit.
 * O ano de publicação do volume segue a lógica (1854 + Volume).
 */
import { loadStaticJson } from './data-loader';
export async function getMetadata(sermonNumber, volumeNumber, lang = 'en') {
  const num = parseInt(sermonNumber, 10);
  const vol = parseInt(volumeNumber, 10);

  if (isNaN(vol)) {
    return null;
  }

  const isNewPark = vol <= 6;
  const year = 1854 + vol;

  const collectionName = isNewPark ? 'New Park Street Pulpit' : 'Metropolitan Tabernacle Pulpit';
  const location = isNewPark ? 'New Park Street Chapel, Southwark' : 'Metropolitan Tabernacle, Newington';

  let detailedDate = null;
  const detailedDates = await loadStaticJson('sermon-dates.json') || {};
  if (detailedDates[num]) {
    detailedDate = detailedDates[num][lang] || detailedDates[num]['en'];
  }

  return {
    sermonNumber: num,
    collectionName: collectionName,
    volumeNumber: vol,
    volumeLabel: `${collectionName} Volume ${vol}`,
    dateDisplay: detailedDate ? detailedDate : `${year}`,
    location: location,
    year: year,
  };
}
