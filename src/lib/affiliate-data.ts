import { registerLinks, type AffiliateLink } from './affiliates';

const links: AffiliateLink[] = [
  {
    id: 'thuisbatterij-offerte',
    network: 'direct',
    merchant: 'Thuisbatterij.nl',
    url: 'https://www.thuisbatterij.nl/',
    niche: 'thuisbatterij',
    label: 'Vergelijk thuisbatterijen',
    commissionType: 'cpa',
    commissionValue: '€50-€150 per lead (na TradeTracker registratie)',
  },
  {
    id: 'energieopslag-vergelijk',
    network: 'direct',
    merchant: 'Energieopslag.info',
    url: 'https://www.energieopslag.info/',
    niche: 'thuisbatterij',
    label: 'Vergelijk energieopslag',
    commissionType: 'cpa',
    commissionValue: '€40-€120 per lead',
  },
  {
    id: 'zonnepanelen-offerte',
    network: 'direct',
    merchant: 'Offerteadviseur',
    url: 'https://www.offerteadviseur.nl/zonnepanelen/',
    niche: 'thuisbatterij',
    label: 'Gratis offertes aanvragen',
    commissionType: 'cpa',
    commissionValue: '€40-€120 per lead (na Daisycon registratie)',
  },
  {
    id: 'energieleverancier-vergelijk',
    network: 'direct',
    merchant: 'Energievergelijken.nl',
    url: 'https://www.energievergelijken.nl/',
    niche: 'thuisbatterij',
    label: 'Vergelijk energieleveranciers',
    commissionType: 'cpa',
    commissionValue: '€30-€80 per overstap (na Daisycon registratie)',
  },
  {
    id: 'subsidie-check',
    network: 'direct',
    merchant: 'Verbeterjehuis / Milieu Centraal',
    url: 'https://www.verbeterjehuis.nl/energiesubsidiewijzer/',
    niche: 'thuisbatterij',
    label: 'Check jouw subsidie',
    commissionType: 'cpa',
    commissionValue: 'geen commissie (informatief)',
  },
];

registerLinks(links);

export default links;
