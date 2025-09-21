import { Species, CompatibilityRating } from '@/types/species'

const compatibilityMatrix: Record<string, Record<string, CompatibilityRating>> = {
  'malawian-cichlids': {
    'malawian-cichlids': 'Y',
    'tanganyikan-cichlids': 'C',
    'misc-african-cichlids': 'C',
    'new-world-cichlids': 'C',
    'angelfish': 'N',
    'barbs': 'C',
    'bettas': 'N',
    'corydoras': 'C',
    'danios-minnows': 'N',
    'discus': 'N',
    'fancy-goldfish': 'N',
    'gouramis': 'N',
    'guppies': 'N',
    'hatchets': 'N',
    'killifish': 'N',
    'larger-catfish': 'C',
    'loaches': 'C',
    'mollies': 'N',
    'platies': 'N',
    'plecos': 'Y',
    'rainbowfish': 'N',
    'rasboras': 'N',
    'sharks': 'C',
    'suckermouth-catfish': 'C',
    'swordtails': 'N',
    'tetras': 'N',
    'misc-fish': 'C',
    'invertebrates': 'C',
    'brackish-fish': 'N',
    'pond-fish': 'N',
    'freshwater-plants': 'C'
  },
  'tanganyikan-cichlids': {
    'malawian-cichlids': 'C',
    'tanganyikan-cichlids': 'Y',
    'misc-african-cichlids': 'Y',
    'new-world-cichlids': 'Y',
    'angelfish': 'Y',
    'barbs': 'Y',
    'bettas': 'N',
    'corydoras': 'Y',
    'danios-minnows': 'Y',
    'discus': 'C',
    'fancy-goldfish': 'N',
    'gouramis': 'Y',
    'guppies': 'Y',
    'hatchets': 'Y',
    'killifish': 'Y',
    'larger-catfish': 'Y',
    'loaches': 'Y',
    'mollies': 'Y',
    'platies': 'Y',
    'plecos': 'Y',
    'rainbowfish': 'Y',
    'rasboras': 'Y',
    'sharks': 'Y',
    'suckermouth-catfish': 'Y',
    'swordtails': 'Y',
    'tetras': 'Y',
    'misc-fish': 'Y',
    'invertebrates': 'Y',
    'brackish-fish': 'N',
    'pond-fish': 'C',
    'freshwater-plants': 'Y',
    'amphibians': 'N'
  },
  'misc-african-cichlids': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'new-world-cichlids': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'angelfish': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'barbs': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-splendens-veiltail': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'N', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'N', 'betta-mahachaiensis': 'N', 'betta-smaragdina': 'N', 'betta-albimarginata': 'C', 'betta-channoides': 'C', 'betta-falx': 'C', 'betta-pugnax': 'C', 'betta-picta': 'C', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'N', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-splendens-crowntail': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'N', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'N', 'betta-mahachaiensis': 'N', 'betta-smaragdina': 'N', 'betta-albimarginata': 'C', 'betta-channoides': 'C', 'betta-falx': 'C', 'betta-pugnax': 'C', 'betta-picta': 'C', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'N', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-splendens-halfmoon': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'N', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'N', 'betta-mahachaiensis': 'N', 'betta-smaragdina': 'N', 'betta-albimarginata': 'C', 'betta-channoides': 'C', 'betta-falx': 'C', 'betta-pugnax': 'C', 'betta-picta': 'C', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'N', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-splendens-plakat': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'N', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'N', 'betta-mahachaiensis': 'N', 'betta-smaragdina': 'N', 'betta-albimarginata': 'C', 'betta-channoides': 'C', 'betta-falx': 'C', 'betta-pugnax': 'C', 'betta-picta': 'C', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'N', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-splendens-doubletail': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'N', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'N', 'betta-mahachaiensis': 'N', 'betta-smaragdina': 'N', 'betta-albimarginata': 'C', 'betta-channoides': 'C', 'betta-falx': 'C', 'betta-pugnax': 'C', 'betta-picta': 'C', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'N', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-imbellis': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'C', 'barbs': 'C', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'C', 'betta-mahachaiensis': 'C', 'betta-smaragdina': 'C', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-mahachaiensis': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'C', 'barbs': 'C', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'C', 'betta-mahachaiensis': 'C', 'betta-smaragdina': 'C', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-smaragdina': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'C', 'barbs': 'C', 'betta-splendens-veiltail': 'N', 'betta-splendens-crowntail': 'N', 'betta-splendens-halfmoon': 'N', 'betta-splendens-plakat': 'N', 'betta-splendens-doubletail': 'N', 'betta-imbellis': 'C', 'betta-mahachaiensis': 'C', 'betta-smaragdina': 'C', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'betta-albimarginata': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'Y', 'betta-splendens-veiltail': 'C', 'betta-splendens-crowntail': 'C', 'betta-splendens-halfmoon': 'C', 'betta-splendens-plakat': 'C', 'betta-splendens-doubletail': 'C', 'betta-imbellis': 'Y', 'betta-mahachaiensis': 'Y', 'betta-smaragdina': 'Y', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C'
  },
  'betta-channoides': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'Y', 'betta-splendens-veiltail': 'C', 'betta-splendens-crowntail': 'C', 'betta-splendens-halfmoon': 'C', 'betta-splendens-plakat': 'C', 'betta-splendens-doubletail': 'C', 'betta-imbellis': 'Y', 'betta-mahachaiensis': 'Y', 'betta-smaragdina': 'Y', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C'
  },
  'betta-falx': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'Y', 'betta-splendens-veiltail': 'C', 'betta-splendens-crowntail': 'C', 'betta-splendens-halfmoon': 'C', 'betta-splendens-plakat': 'C', 'betta-splendens-doubletail': 'C', 'betta-imbellis': 'Y', 'betta-mahachaiensis': 'Y', 'betta-smaragdina': 'Y', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C'
  },
  'betta-pugnax': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'Y', 'betta-splendens-veiltail': 'C', 'betta-splendens-crowntail': 'C', 'betta-splendens-halfmoon': 'C', 'betta-splendens-plakat': 'C', 'betta-splendens-doubletail': 'C', 'betta-imbellis': 'Y', 'betta-mahachaiensis': 'Y', 'betta-smaragdina': 'Y', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C'
  },
  'betta-picta': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'Y', 'betta-splendens-veiltail': 'C', 'betta-splendens-crowntail': 'C', 'betta-splendens-halfmoon': 'C', 'betta-splendens-plakat': 'C', 'betta-splendens-doubletail': 'C', 'betta-imbellis': 'Y', 'betta-mahachaiensis': 'Y', 'betta-smaragdina': 'Y', 'betta-albimarginata': 'Y', 'betta-channoides': 'Y', 'betta-falx': 'Y', 'betta-pugnax': 'Y', 'betta-picta': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C'
  },
  'bronze-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'peppered-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'panda-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'julii-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'albino-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'common-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'C', 'bristlenose-pleco': 'C', 'zebra-pleco': 'C', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'C', 'amphibians': 'N'
  },
  'bristlenose-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'C', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'C', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'zebra-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'C', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'C', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'royal-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bronze-cory': 'C', 'peppered-cory': 'C', 'panda-cory': 'C', 'julii-cory': 'C', 'albino-cory': 'C', 'common-pleco': 'C', 'bristlenose-pleco': 'C', 'zebra-pleco': 'C', 'royal-pleco': 'N', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'Y', 'danios-minnows': 'C', 'discus': 'C', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'Y', 'freshwater-plants': 'N', 'amphibians': 'N'
  },
  'glass-catfish': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'Y', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'C', 'channel-catfish': 'C', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'pictus-catfish': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bronze-cory': 'C', 'peppered-cory': 'C', 'panda-cory': 'C', 'julii-cory': 'C', 'albino-cory': 'C', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'Y', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'Y', 'danios-minnows': 'C', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'C', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'synodontis-catfish': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'Y', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'upside-down-catfish': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'Y', 'glass-catfish': 'Y', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'banjo-catfish': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'Y', 'glass-catfish': 'C', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'C', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'channel-catfish': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'N', 'barbs': 'N', 'bronze-cory': 'N', 'peppered-cory': 'N', 'panda-cory': 'N', 'julii-cory': 'N', 'albino-cory': 'N', 'sterbai-cory': 'N', 'emerald-cory': 'N', 'adolfi-cory': 'N', 'agassizii-cory': 'N', 'arcuatus-cory': 'N', 'barbatus-cory': 'N', 'concolor-cory': 'N', 'duplicareus-cory': 'N', 'habrosus-cory': 'N', 'hastatus-cory': 'N', 'leucomelas-cory': 'N', 'melanotaenia-cory': 'N', 'pygmaeus-cory': 'N', 'reticulatus-cory': 'N', 'schwartzi-cory': 'N', 'similis-cory': 'N', 'sodalis-cory': 'N', 'trilineatus-cory': 'N', 'undulatus-cory': 'N', 'venezuela-cory': 'N', 'common-pleco': 'Y', 'bristlenose-pleco': 'C', 'zebra-pleco': 'C', 'royal-pleco': 'Y', 'glass-catfish': 'C', 'pictus-catfish': 'Y', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'C', 'channel-catfish': 'Y', 'danios-minnows': 'N', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'N', 'guppies': 'N', 'hatchets': 'N', 'killifish': 'N', 'loaches': 'C', 'mollies': 'N', 'platies': 'N', 'rainbowfish': 'N', 'rasboras': 'N', 'sharks': 'C', 'swordtails': 'N', 'tetras': 'N', 'misc-fish': 'C', 'invertebrates': 'N', 'brackish-fish': 'N', 'pond-fish': 'Y', 'freshwater-plants': 'C', 'amphibians': 'N'
  },
  'sterbai-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'sterbai-cory': 'Y', 'emerald-cory': 'Y', 'adolfi-cory': 'Y', 'agassizii-cory': 'Y', 'arcuatus-cory': 'Y', 'barbatus-cory': 'Y', 'concolor-cory': 'Y', 'duplicareus-cory': 'Y', 'habrosus-cory': 'Y', 'hastatus-cory': 'Y', 'leucomelas-cory': 'Y', 'melanotaenia-cory': 'Y', 'pygmaeus-cory': 'Y', 'reticulatus-cory': 'Y', 'schwartzi-cory': 'Y', 'similis-cory': 'Y', 'sodalis-cory': 'Y', 'trilineatus-cory': 'Y', 'undulatus-cory': 'Y', 'venezuela-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'emerald-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bronze-cory': 'Y', 'peppered-cory': 'Y', 'panda-cory': 'Y', 'julii-cory': 'Y', 'albino-cory': 'Y', 'sterbai-cory': 'Y', 'emerald-cory': 'Y', 'adolfi-cory': 'Y', 'agassizii-cory': 'Y', 'arcuatus-cory': 'Y', 'barbatus-cory': 'Y', 'concolor-cory': 'Y', 'duplicareus-cory': 'Y', 'habrosus-cory': 'Y', 'hastatus-cory': 'Y', 'leucomelas-cory': 'Y', 'melanotaenia-cory': 'Y', 'pygmaeus-cory': 'Y', 'reticulatus-cory': 'Y', 'schwartzi-cory': 'Y', 'similis-cory': 'Y', 'sodalis-cory': 'Y', 'trilineatus-cory': 'Y', 'undulatus-cory': 'Y', 'venezuela-cory': 'Y', 'common-pleco': 'Y', 'bristlenose-pleco': 'Y', 'zebra-pleco': 'Y', 'royal-pleco': 'C', 'glass-catfish': 'Y', 'pictus-catfish': 'C', 'synodontis-catfish': 'Y', 'upside-down-catfish': 'Y', 'banjo-catfish': 'Y', 'channel-catfish': 'N', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'danios-minnows': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'fancy-goldfish': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'C', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'N', 'fancy-goldfish': 'Y', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'gouramis': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'C', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'guppies': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'Y', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'amphibians': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'N', 'angelfish': 'N', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'N', 'danios-minnows': 'N', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'N', 'guppies': 'N', 'hatchets': 'N', 'killifish': 'N', 'larger-catfish': 'N', 'loaches': 'N', 'mollies': 'N', 'platies': 'N', 'plecos': 'N', 'rainbowfish': 'N', 'rasboras': 'N', 'sharks': 'N', 'suckermouth-catfish': 'N', 'swordtails': 'N', 'tetras': 'N', 'misc-fish': 'N', 'invertebrates': 'N', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'Y', 'oscar-cichlid': 'N', 'discus-symphysodon': 'N', 'convict-cichlid': 'N', 'firemouth-cichlid': 'N', 'severum-cichlid': 'N', 'jack-dempsey-cichlid': 'N', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'N', 'german-blue-ram': 'N', 'bolivian-ram': 'N', 'apistogramma-cacatuoides': 'N', 'apistogramma-agassizii': 'N', 'blue-acara': 'N', 'green-terror': 'N', 'geophagus-surinamensis': 'N', 'uaru-cichlid': 'N'
  },

  // South American Cichlid Compatibility Matrix
  'oscar-cichlid': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'N', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'N', 'danios-minnows': 'N', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'N', 'guppies': 'N', 'hatchets': 'N', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'N', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'N', 'rasboras': 'N', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'N', 'misc-fish': 'C', 'invertebrates': 'N', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'N', 'convict-cichlid': 'C', 'firemouth-cichlid': 'C', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'Y', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'N', 'bolivian-ram': 'N', 'apistogramma-cacatuoides': 'N', 'apistogramma-agassizii': 'N', 'blue-acara': 'C', 'green-terror': 'Y', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'discus-symphysodon': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'N', 'firemouth-cichlid': 'N', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'N', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'convict-cichlid': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'Y', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'N', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'C', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'Y', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'N', 'bolivian-ram': 'C', 'apistogramma-cacatuoides': 'N', 'apistogramma-agassizii': 'N', 'blue-acara': 'Y', 'green-terror': 'Y', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'C'
  },
  'firemouth-cichlid': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'N', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'Y', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'C', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'C', 'apistogramma-agassizii': 'C', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'severum-cichlid': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'jack-dempsey-cichlid': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'N', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'C', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'Y', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'N', 'bolivian-ram': 'C', 'apistogramma-cacatuoides': 'N', 'apistogramma-agassizii': 'N', 'blue-acara': 'C', 'green-terror': 'Y', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'C'
  },
  'texas-cichlid': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'N', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'N', 'danios-minnows': 'N', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'N', 'guppies': 'N', 'hatchets': 'N', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'N', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'N', 'rasboras': 'N', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'N', 'misc-fish': 'C', 'invertebrates': 'N', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'N', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'C', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'Y', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'N', 'bolivian-ram': 'N', 'apistogramma-cacatuoides': 'N', 'apistogramma-agassizii': 'N', 'blue-acara': 'C', 'green-terror': 'Y', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'C'
  },
  'blood-parrot-cichlid': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'C', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'C', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'C', 'apistogramma-agassizii': 'C', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'german-blue-ram': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'C', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'N', 'firemouth-cichlid': 'C', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'N', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'Y'
  },
  'bolivian-ram': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'apistogramma-cacatuoides': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'C', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'N', 'firemouth-cichlid': 'C', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'N', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'Y'
  },
  'apistogramma-agassizii': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'C', 'angelfish': 'Y', 'barbs': 'C', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'N', 'firemouth-cichlid': 'C', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'N', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'Y'
  },
  'blue-acara': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'green-terror': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'N', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'N', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'Y', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'N', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'C', 'severum-cichlid': 'C', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'Y', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'N', 'bolivian-ram': 'N', 'apistogramma-cacatuoides': 'N', 'apistogramma-agassizii': 'N', 'blue-acara': 'C', 'green-terror': 'Y', 'geophagus-surinamensis': 'C', 'uaru-cichlid': 'C'
  },
  'geophagus-surinamensis': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'C', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'C', 'apistogramma-agassizii': 'C', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y'
  },
  'uaru-cichlid': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'Y', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },

  // Additional Corydoras Compatibility Matrix
  'venezuelan-orange-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'skunk-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'bandit-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'green-gold-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'leopard-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'duplicate-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'punctatus-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'schwartzi-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'axelrodi-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'agassizi-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'elegans-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'weitzmani-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'rabauti-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'sodalis-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y'
  },
  'loretoensis-cory': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y'
  },
  'l144-blue-eyed-lemon-bristlenose': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'C', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l200-green-phantom': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'C', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l600-megalancistrus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'C', 'convict-cichlid': 'C', 'firemouth-cichlid': 'C', 'severum-cichlid': 'C', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'C', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'C', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'C', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'C', 'l397-alenquer-tiger': 'C', 'l260-queen-arabesque': 'C', 'l066-king-tiger-pleco': 'C', 'l177-gold-nugget-variant': 'C', 'l129-colombian-zebra': 'C', 'l002-tiger-pleco': 'C', 'l075-orange-seam': 'C', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'C', 'l404-titanic-pleco': 'C'
  },
  'l333-king-tiger': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'C', 'l397-alenquer-tiger': 'C', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'C', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'C', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l397-alenquer-tiger': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'C', 'l397-alenquer-tiger': 'C', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'C', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'C', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l260-queen-arabesque': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'C', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l066-king-tiger-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'C', 'l397-alenquer-tiger': 'C', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'C', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'C', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l177-gold-nugget-variant': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'C', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l129-colombian-zebra': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'C', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l002-tiger-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'C', 'l397-alenquer-tiger': 'C', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'C', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'C', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l075-orange-seam': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'C', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'C'
  },
  'l471-dwarf-spotted': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'C', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y'
  },
  'l236-super-white': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'Y', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'C', 'l404-titanic-pleco': 'C'
  },
  'l404-titanic-pleco': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'C', 'convict-cichlid': 'C', 'firemouth-cichlid': 'C', 'severum-cichlid': 'C', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'C', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'C', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'C', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'C', 'l200-green-phantom': 'C', 'l600-megalancistrus': 'C', 'l333-king-tiger': 'C', 'l397-alenquer-tiger': 'C', 'l260-queen-arabesque': 'C', 'l066-king-tiger-pleco': 'C', 'l177-gold-nugget-variant': 'C', 'l129-colombian-zebra': 'C', 'l002-tiger-pleco': 'C', 'l075-orange-seam': 'C', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'C', 'l404-titanic-pleco': 'C', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'zebra-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'pearl-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'giant-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'C', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'C', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'leopard-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'blue-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'glowlight-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'galaxy-rasbora': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'N', 'discus-symphysodon': 'Y', 'convict-cichlid': 'C', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'N', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'N', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'C', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'orange-finned-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'rosy-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'spotted-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'longfin-zebra-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y'
  },
  'turquoise-danio': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'oscar-cichlid': 'C', 'discus-symphysodon': 'Y', 'convict-cichlid': 'Y', 'firemouth-cichlid': 'Y', 'severum-cichlid': 'Y', 'jack-dempsey-cichlid': 'C', 'texas-cichlid': 'C', 'blood-parrot-cichlid': 'Y', 'german-blue-ram': 'Y', 'bolivian-ram': 'Y', 'apistogramma-cacatuoides': 'Y', 'apistogramma-agassizii': 'Y', 'blue-acara': 'Y', 'green-terror': 'C', 'geophagus-surinamensis': 'Y', 'uaru-cichlid': 'Y', 'venezuelan-orange-cory': 'Y', 'skunk-cory': 'Y', 'bandit-cory': 'Y', 'green-gold-cory': 'Y', 'leopard-cory': 'Y', 'duplicate-cory': 'Y', 'punctatus-cory': 'Y', 'schwartzi-cory': 'Y', 'axelrodi-cory': 'Y', 'agassizi-cory': 'Y', 'elegans-cory': 'Y', 'weitzmani-cory': 'Y', 'rabauti-cory': 'Y', 'sodalis-cory': 'Y', 'loretoensis-cory': 'Y', 'l144-blue-eyed-lemon-bristlenose': 'Y', 'l200-green-phantom': 'Y', 'l600-megalancistrus': 'Y', 'l333-king-tiger': 'Y', 'l397-alenquer-tiger': 'Y', 'l260-queen-arabesque': 'Y', 'l066-king-tiger-pleco': 'Y', 'l177-gold-nugget-variant': 'Y', 'l129-colombian-zebra': 'Y', 'l002-tiger-pleco': 'Y', 'l075-orange-seam': 'Y', 'l471-dwarf-spotted': 'Y', 'l236-super-white': 'Y', 'l404-titanic-pleco': 'Y', 'zebra-danio': 'Y', 'pearl-danio': 'Y', 'giant-danio': 'Y', 'leopard-danio': 'Y', 'blue-danio': 'Y', 'glowlight-danio': 'Y', 'galaxy-rasbora': 'Y', 'orange-finned-danio': 'Y', 'rosy-danio': 'Y', 'spotted-danio': 'Y', 'longfin-zebra-danio': 'Y', 'turquoise-danio': 'Y', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'white-cloud-mountain-minnow': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'gold-white-cloud-minnow': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'vietnamese-white-cloud': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'N', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'meteor-minnow': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'pink-white-cloud': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'longfin-white-cloud': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'vietnamese-cardinal-minnow': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y'
  },
  'chinese-hillstream-minnow': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'N', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'C', 'white-cloud-mountain-minnow': 'Y', 'gold-white-cloud-minnow': 'Y', 'vietnamese-white-cloud': 'Y', 'meteor-minnow': 'Y', 'pink-white-cloud': 'Y', 'longfin-white-cloud': 'Y', 'vietnamese-cardinal-minnow': 'Y', 'chinese-hillstream-minnow': 'Y', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'C', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'harlequin-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'lambchop-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'scissortail-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'redline-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'brilliant-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'emerald-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'dwarf-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'C', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'chili-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'N', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'phoenix-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'N', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'strawberry-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'N', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'least-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'N', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'fire-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'C', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'C', 'angelfish': 'C', 'barbs': 'C', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'C', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'N', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'N', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'giant-rasbora': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'C', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'C', 'chili-rasbora': 'N', 'phoenix-rasbora': 'N', 'strawberry-rasbora': 'N', 'least-rasbora': 'N', 'fire-rasbora': 'N', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'yellow-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y'
  },
  'black-line-rasbora': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'C', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'C', 'harlequin-rasbora': 'Y', 'lambchop-rasbora': 'Y', 'scissortail-rasbora': 'Y', 'redline-rasbora': 'Y', 'brilliant-rasbora': 'Y', 'emerald-rasbora': 'Y', 'dwarf-rasbora': 'Y', 'chili-rasbora': 'Y', 'phoenix-rasbora': 'Y', 'strawberry-rasbora': 'Y', 'least-rasbora': 'Y', 'fire-rasbora': 'Y', 'giant-rasbora': 'Y', 'yellow-rasbora': 'Y', 'black-line-rasbora': 'Y', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'brown-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'blue-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'green-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'pigeon-blood-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'checkerboard-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'turquoise-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'red-turquoise-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'cobalt-blue-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'powder-blue-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'snow-white-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'yellow-crystal-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'red-spotted-green-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'leopard-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'marlboro-red-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'german-red-discus': {
    'malawian-cichlids': 'N', 'tanganyikan-cichlids': 'N', 'misc-african-cichlids': 'N', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'N', 'bettas': 'N', 'corydoras': 'Y', 'danios-minnows': 'C', 'discus': 'Y', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'N', 'platies': 'N', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'C', 'sharks': 'C', 'suckermouth-catfish': 'Y', 'swordtails': 'N', 'tetras': 'Y', 'misc-fish': 'C', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N', 'brown-discus': 'Y', 'blue-discus': 'Y', 'green-discus': 'Y', 'pigeon-blood-discus': 'Y', 'checkerboard-discus': 'Y', 'turquoise-discus': 'Y', 'red-turquoise-discus': 'Y', 'cobalt-blue-discus': 'Y', 'powder-blue-discus': 'Y', 'snow-white-discus': 'Y', 'yellow-crystal-discus': 'Y', 'red-spotted-green-discus': 'Y', 'leopard-discus': 'Y', 'marlboro-red-discus': 'Y', 'german-red-discus': 'Y'
  },
  'leopard-frog-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'vampire-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'C', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'C', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'galaxy-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'C', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'C', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'snowball-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'clown-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'sultan-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'N', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'N', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'N', 'guppies': 'N', 'hatchets': 'N', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'N', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'N', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'N', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'C', 'amphibians': 'N'
  },
  'hemiancistrus-subviridis': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'sunshine-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'N', 'barbs': 'C', 'bettas': 'N', 'corydoras': 'N', 'danios-minnows': 'C', 'discus': 'N', 'fancy-goldfish': 'N', 'gouramis': 'N', 'guppies': 'N', 'hatchets': 'N', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'C', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'C', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'N', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'red-lizard-whiptail': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'royal-whiptail': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'C', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'panda-garra': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'zebra-oto': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'orange-seam-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'blue-panaque': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'C', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'C', 'amphibians': 'N'
  },
  'chocolate-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'C', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'C', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'typhoon-pleco': {
    'malawian-cichlids': 'Y', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'C', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'C', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'N', 'hatchets': 'C', 'killifish': 'N', 'larger-catfish': 'Y', 'loaches': 'C', 'mollies': 'C', 'platies': 'C', 'plecos': 'C', 'rainbowfish': 'C', 'rasboras': 'C', 'sharks': 'Y', 'suckermouth-catfish': 'C', 'swordtails': 'C', 'tetras': 'C', 'misc-fish': 'C', 'invertebrates': 'C', 'brackish-fish': 'N', 'pond-fish': 'N', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'tiger-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'marble-sailfin-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'N', 'corydoras': 'C', 'danios-minnows': 'Y', 'discus': 'C', 'fancy-goldfish': 'N', 'gouramis': 'C', 'guppies': 'C', 'hatchets': 'Y', 'killifish': 'C', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'C', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'C', 'amphibians': 'N'
  },
  'flash-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'Y', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'C', 'pond-fish': 'Y', 'freshwater-plants': 'Y', 'amphibians': 'N'
  },
  'mega-clown-pleco': {
    'malawian-cichlids': 'C', 'tanganyikan-cichlids': 'Y', 'misc-african-cichlids': 'Y', 'new-world-cichlids': 'Y', 'angelfish': 'Y', 'barbs': 'Y', 'bettas': 'C', 'corydoras': 'Y', 'danios-minnows': 'Y', 'discus': 'Y', 'fancy-goldfish': 'Y', 'gouramis': 'Y', 'guppies': 'Y', 'hatchets': 'Y', 'killifish': 'Y', 'larger-catfish': 'Y', 'loaches': 'Y', 'mollies': 'Y', 'platies': 'Y', 'plecos': 'Y', 'rainbowfish': 'Y', 'rasboras': 'Y', 'sharks': 'Y', 'suckermouth-catfish': 'Y', 'swordtails': 'Y', 'tetras': 'Y', 'misc-fish': 'Y', 'invertebrates': 'Y', 'brackish-fish': 'N', 'pond-fish': 'C', 'freshwater-plants': 'Y', 'amphibians': 'N'
  }
}

export const speciesData: Species[] = [
  {
    id: 'malawian-cichlids',
    name: 'Malawian Cichlids',
    category: 'Cichlids',
    scientificName: 'Various Pseudotropheus, Melanochromis, Labidochromis',
    compatibility: compatibilityMatrix['malawian-cichlids'],
    quickFacts: [
      'Highly territorial and aggressive',
      'Require hard, alkaline water (pH 7.8-8.6)',
      'Minimum tank size: 55+ gallons',
      'Mouthbrooders - females carry eggs/fry',
      'Herbivorous diet preferred',
      'Colorful with vibrant blues, yellows, oranges',
      'Live 5-8 years in captivity',
      'Need plenty of rockwork for territories',
      'Best kept in species-only tanks',
      'Overstocking helps reduce aggression'
    ],
    detailedInfo: {
      description: 'Lake Malawi cichlids are among the most colorful freshwater fish, known for their vibrant colors and complex social behaviors.',
      size: '7.6-15.2 cm (3-6 inches)',
      temperament: 'Aggressive/Territorial',
      diet: 'Herbivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (76-82°F)',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'angelfish',
    name: 'Angelfish',
    category: 'Cichlids',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Peaceful cichlid with semi-aggressive tendencies',
      'Grows up to 15 cm (6 inches) tall',
      'Prefers soft, slightly acidic water',
      'Forms monogamous breeding pairs',
      'Omnivorous diet',
      'Elegant, triangular body shape',
      'Lives 10+ years with proper care',
      'Needs tall tanks due to body shape',
      'Can eat small fish like neon tetras',
      'Social fish that do well in groups'
    ],
    detailedInfo: {
      description: 'Graceful and elegant cichlids that make excellent centerpiece fish for larger community aquariums.',
      size: '15 cm tall, 20 cm long (6 inches tall, 8 inches long)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '114+ litres (30+ gallons)',
      waterParams: {
        temperature: '24-29°C (76-84°F)',
        ph: '6.0-7.5',
        hardness: '3-10 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10+ years'
    }
  },
  {
    id: 'tanganyikan-cichlids',
    name: 'Tanganyikan Cichlids',
    category: 'Cichlids',
    scientificName: 'Various Lamprologus, Julidochromis, Neolamprologus',
    compatibility: compatibilityMatrix['tanganyikan-cichlids'],
    quickFacts: [
      'Less aggressive than Malawian cichlids',
      'Prefer hard, alkaline water (pH 7.8-9.0)',
      'Shell dwellers and rock dwellers',
      'Complex breeding behaviors',
      'Omnivorous with insectivore preference',
      'Unique body shapes and patterns',
      'Live 8-12 years in captivity',
      'Need caves and shell territories',
      'Can be kept with some community fish',
      'Very active and intelligent'
    ],
    detailedInfo: {
      description: 'Lake Tanganyika cichlids are known for their diverse forms and interesting behaviors, from tiny shell dwellers to large predators.',
      size: '5-20 cm (2-8 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-81°F)',
        ph: '7.8-9.0',
        hardness: '12-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'bronze-cory',
    name: 'Bronze Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras aeneus',
    compatibility: compatibilityMatrix['bronze-cory'] || {},
    quickFacts: [
      'Most common and hardy Corydoras species',
      'Peaceful bottom dwellers that need groups of 6+',
      'Constantly search substrate for food',
      'Very adaptable to various water conditions',
      'Omnivorous scavengers and algae eaters',
      'Bronze/golden metallic coloration',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Excellent beginner community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'The most popular and hardy Corydoras species, perfect for beginners. Bronze metallic coloration and extremely peaceful nature.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'peppered-cory',
    name: 'Peppered Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras paleatus',
    compatibility: compatibilityMatrix['peppered-cory'] || {},
    quickFacts: [
      'Hardy species with distinctive peppered pattern',
      'Peaceful bottom dwellers that need groups of 6+',
      'Tolerate cooler temperatures than most Corydoras',
      'Very adaptable to various water conditions',
      'Omnivorous scavengers and algae eaters',
      'Dark spotted pattern on light background',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Excellent beginner community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Hardy Corydoras with distinctive dark peppered spots. More tolerant of cooler temperatures than most tropical fish.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-25°C (64-77°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'panda-cory',
    name: 'Panda Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras panda',
    compatibility: compatibilityMatrix['panda-cory'] || {},
    quickFacts: [
      'Adorable panda-like black and white markings',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than Bronze or Peppered Corys',
      'Require stable, clean water conditions',
      'Omnivorous scavengers and algae eaters',
      'White body with black patches around eyes',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Corydoras with panda-like markings. More sensitive than other species but extremely popular for their cute appearance.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-25°C (72-77°F)',
        ph: '6.0-7.0',
        hardness: '2-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'julii-cory',
    name: 'Julii Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras julii',
    compatibility: compatibilityMatrix['julii-cory'] || {},
    quickFacts: [
      'Beautiful spotted pattern with reticulated markings',
      'Peaceful bottom dwellers that need groups of 6+',
      'Often confused with C. trilineatus (Three-line Cory)',
      'Moderately hardy with stable conditions',
      'Omnivorous scavengers and algae eaters',
      'Fine black spots and lines on silver body',
      'Live 5-7 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Elegant Corydoras with intricate spotted patterns and reticulated markings. True C. julii is less common than the similar C. trilineatus.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'albino-cory',
    name: 'Albino Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras aeneus (Albino)',
    compatibility: compatibilityMatrix['albino-cory'] || {},
    quickFacts: [
      'Albino variety of Bronze Corydoras (C. aeneus)',
      'Peaceful bottom dwellers that need groups of 6+',
      'Same care requirements as Bronze Corydoras',
      'Very hardy and adaptable to many conditions',
      'Omnivorous scavengers and algae eaters',
      'Pale pink/white body with red eyes',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Excellent beginner community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Albino variety of the popular Bronze Corydoras. Same hardy nature and care requirements with striking pale coloration.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'sterbai-cory',
    name: 'Sterbai Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras sterbai',
    compatibility: compatibilityMatrix['sterbai-cory'] || {},
    quickFacts: [
      'Beautiful spotted Corydoras with orange pectoral fins',
      'Peaceful bottom dwellers that need groups of 6+',
      'Prefers warmer water than most Corydoras',
      'More sensitive than Bronze Corydoras',
      'Omnivorous scavengers and algae eaters',
      'White body with black spots and orange fins',
      'Live 5-7 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Stunning Corydoras with distinctive spotted pattern and bright orange pectoral fins. Prefers warmer water and stable conditions.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'emerald-cory',
    name: 'Emerald Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras splendens',
    compatibility: compatibilityMatrix['emerald-cory'] || {},
    quickFacts: [
      'Large, robust Corydoras with metallic green sheen',
      'Peaceful bottom dwellers that need groups of 6+',
      'Hardy and adaptable to various conditions',
      'One of the larger Corydoras species',
      'Omnivorous scavengers and algae eaters',
      'Dark body with emerald green metallic highlights',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Large, hardy Corydoras with beautiful metallic green coloration. One of the more robust species suitable for beginners.',
      size: '9 cm (3.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'adolfi-cory',
    name: 'Adolfi Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras adolfoi',
    compatibility: compatibilityMatrix['adolfi-cory'] || {},
    quickFacts: [
      'Small, delicate Corydoras with orange stripe',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common Corydoras species',
      'Requires stable, clean water conditions',
      'Omnivorous scavengers and algae eaters',
      'White body with black markings and orange dorsal stripe',
      'Live 4-6 years with excellent care',
      'Need soft substrate to protect barbels',
      'Advanced level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Delicate and beautiful Corydoras with distinctive orange dorsal stripe. Requires excellent water quality and stable conditions.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-26°C (73-79°F)',
        ph: '6.0-7.0',
        hardness: '1-10 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'habrosus-cory',
    name: 'Salt and Pepper Cory',
    category: 'Catfish',
    scientificName: 'Corydoras habrosus',
    compatibility: compatibilityMatrix['habrosus-cory'] || {},
    quickFacts: [
      'Tiny dwarf Corydoras perfect for nano tanks',
      'Peaceful bottom dwellers that need groups of 8+',
      'One of the smallest Corydoras species',
      'Active swimmers that use all water levels',
      'Omnivorous scavengers with small mouths',
      'Tan body with black salt-and-pepper spotting',
      'Live 3-5 years with good care',
      'Need fine substrate to protect barbels',
      'Intermediate level nano fish',
      'Very active during day, constantly moving'
    ],
    detailedInfo: {
      description: 'Tiny dwarf Corydoras ideal for smaller tanks. More active than larger species and swims in all water levels.',
      size: '3 cm (1.2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'hastatus-cory',
    name: 'Dwarf Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras hastatus',
    compatibility: compatibilityMatrix['hastatus-cory'] || {},
    quickFacts: [
      'Smallest Corydoras species, perfect for nano tanks',
      'Peaceful schooling fish that need groups of 10+',
      'Swims in mid-water column unlike other Corydoras',
      'Very active and constantly moving',
      'Omnivorous with tiny mouths requiring small foods',
      'Silver body with distinctive tail spot',
      'Live 3-5 years with good care',
      'Need very fine substrate or sand',
      'Intermediate level nano fish',
      'Schooling behavior similar to tetras'
    ],
    detailedInfo: {
      description: 'The smallest Corydoras species that behaves more like a tetra, swimming actively in the mid-water column in tight schools.',
      size: '2.5 cm (1 inch)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'pygmaeus-cory',
    name: 'Pygmy Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras pygmaeus',
    compatibility: compatibilityMatrix['pygmaeus-cory'] || {},
    quickFacts: [
      'Tiny dwarf Corydoras ideal for nano tanks',
      'Peaceful schooling fish that need groups of 8+',
      'More active in water column than larger Corydoras',
      'Constantly active and entertaining to watch',
      'Omnivorous with preference for small foods',
      'Silver body with horizontal black stripe',
      'Live 3-5 years with good care',
      'Need very fine substrate or sand',
      'Intermediate level nano fish',
      'Mix bottom dwelling with mid-water swimming'
    ],
    detailedInfo: {
      description: 'Small active Corydoras that spends time both on the bottom and swimming in the water column. Perfect for nano community tanks.',
      size: '3 cm (1.2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'trilineatus-cory',
    name: 'Three Line Corydoras',
    category: 'Catfish',
    scientificName: 'Corydoras trilineatus',
    compatibility: compatibilityMatrix['trilineatus-cory'] || {},
    quickFacts: [
      'Often confused with Julii Corydoras',
      'Peaceful bottom dwellers that need groups of 6+',
      'Hardy and adaptable to various conditions',
      'Distinguished by connected lines vs spots',
      'Omnivorous scavengers and algae eaters',
      'Silver body with black reticulated pattern',
      'Live 5-7 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Hardy Corydoras often confused with C. julii but distinguished by connected line patterns rather than individual spots.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'venezuelan-orange-cory',
    name: 'Venezuelan Orange Cory',
    category: 'Catfish',
    scientificName: 'Corydoras venezuelanus',
    compatibility: compatibilityMatrix['venezuelan-orange-cory'] || {},
    quickFacts: [
      'Stunning orange and black coloration',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than Bronze Corydoras',
      'Requires stable water conditions',
      'Omnivorous scavengers and algae eaters',
      'Bright orange body with black markings',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Venezuelan Corydoras with striking orange and black coloration. More sensitive than common species but stunning in planted tanks.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-26°C (75-78°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'skunk-cory',
    name: 'Skunk Cory',
    category: 'Catfish',
    scientificName: 'Corydoras arcuatus',
    compatibility: compatibilityMatrix['skunk-cory'] || {},
    quickFacts: [
      'Distinctive black stripe from nose to tail',
      'Peaceful bottom dwellers that need groups of 6+',
      'Named for skunk-like black stripe pattern',
      'Hardy and adaptable to various conditions',
      'Omnivorous scavengers and algae eaters',
      'White/cream body with prominent black line',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Distinctive Corydoras with a prominent black stripe running from nose to tail, resembling a skunk pattern. Hardy and peaceful community fish.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'bandit-cory',
    name: 'Bandit Cory',
    category: 'Catfish',
    scientificName: 'Corydoras metae',
    compatibility: compatibilityMatrix['bandit-cory'] || {},
    quickFacts: [
      'Black mask across eyes like a bandit',
      'Peaceful bottom dwellers that need groups of 6+',
      'Hardy and easy to care for',
      'Similar care to Bronze Corydoras',
      'Omnivorous scavengers and algae eaters',
      'Silver body with distinctive black eye mask',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Hardy Corydoras with distinctive black mask across the eyes, earning its "bandit" nickname. Excellent beginner catfish with peaceful temperament.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'green-gold-cory',
    name: 'Green Gold Cory',
    category: 'Catfish',
    scientificName: 'Corydoras melanotaenia',
    compatibility: compatibilityMatrix['green-gold-cory'] || {},
    quickFacts: [
      'Beautiful metallic green and gold coloration',
      'Peaceful bottom dwellers that need groups of 6+',
      'More colorful than many Corydoras species',
      'Hardy and adaptable to various conditions',
      'Omnivorous scavengers and algae eaters',
      'Metallic green back with golden belly',
      'Live 5-7 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner to intermediate level fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Corydoras with stunning metallic green and gold coloration. More colorful than most species while maintaining easy care requirements.',
      size: '6.5 cm (2.6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'leopard-cory',
    name: 'Leopard Cory',
    category: 'Catfish',
    scientificName: 'Corydoras leopardus',
    compatibility: compatibilityMatrix['leopard-cory'] || {},
    quickFacts: [
      'Distinctive leopard-like spotted pattern',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common species',
      'Beautiful spotted coloration pattern',
      'Omnivorous scavengers and algae eaters',
      'Light body with dark leopard spots',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Striking Corydoras with leopard-like spotted pattern. More sensitive than common species but highly prized for beautiful markings.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-26°C (73-78°F)',
        ph: '6.0-7.0',
        hardness: '2-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'duplicate-cory',
    name: 'Duplicate Cory',
    category: 'Catfish',
    scientificName: 'Corydoras duplicareus',
    compatibility: compatibilityMatrix['duplicate-cory'] || {},
    quickFacts: [
      'Beautiful reticulated pattern on body',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common Corydoras',
      'Requires stable water conditions',
      'Omnivorous scavengers and algae eaters',
      'Cream body with dark reticulated markings',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Corydoras with intricate reticulated pattern. More sensitive than common species and requires stable water conditions.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-80°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'punctatus-cory',
    name: 'Punctatus Cory',
    category: 'Catfish',
    scientificName: 'Corydoras punctatus',
    compatibility: compatibilityMatrix['punctatus-cory'] || {},
    quickFacts: [
      'Spotted pattern with elongated snout',
      'Peaceful bottom dwellers that need groups of 6+',
      'Hardy and easy to care for',
      'Distinctive spotted coloration pattern',
      'Omnivorous scavengers and algae eaters',
      'Silver body with black spots throughout',
      'Live 5-8 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Hardy Corydoras with attractive spotted pattern and slightly elongated snout. Excellent beginner species with peaceful temperament.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'schwartzi-cory',
    name: 'Schwartzi Cory',
    category: 'Catfish',
    scientificName: 'Corydoras schwartzi',
    compatibility: compatibilityMatrix['schwartzi-cory'] || {},
    quickFacts: [
      'Beautiful golden and black pattern',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than Bronze Corydoras',
      'Distinctive golden coloration with black markings',
      'Omnivorous scavengers and algae eaters',
      'Golden body with black stripe and spots',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Corydoras with golden coloration and distinctive black markings. More sensitive than common species but prized for striking appearance.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-26°C (73-78°F)',
        ph: '6.0-7.0',
        hardness: '2-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'axelrodi-cory',
    name: 'Axelrodi Cory',
    category: 'Catfish',
    scientificName: 'Corydoras axelrodi',
    compatibility: compatibilityMatrix['axelrodi-cory'] || {},
    quickFacts: [
      'Distinctive black and white striped pattern',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common species',
      'Beautiful contrasting coloration',
      'Omnivorous scavengers and algae eaters',
      'White body with bold black stripes',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Striking Corydoras with bold black and white striped pattern. More sensitive than common species and requires stable conditions.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-80°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'agassizi-cory',
    name: 'Agassizi Cory',
    category: 'Catfish',
    scientificName: 'Corydoras agassizii',
    compatibility: compatibilityMatrix['agassizi-cory'] || {},
    quickFacts: [
      'Beautiful spotted pattern with orange fins',
      'Peaceful bottom dwellers that need groups of 6+',
      'Hardy and adaptable species',
      'Attractive spotted body with colorful fins',
      'Omnivorous scavengers and algae eaters',
      'Gray body with spots and orange fin edges',
      'Live 5-7 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner to intermediate level fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Attractive Corydoras with spotted pattern and distinctive orange fin coloration. Hardy species suitable for beginners.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'elegans-cory',
    name: 'Elegans Cory',
    category: 'Catfish',
    scientificName: 'Corydoras elegans',
    compatibility: compatibilityMatrix['elegans-cory'] || {},
    quickFacts: [
      'Elegant spotted pattern as name suggests',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common species',
      'Beautiful fine spotted coloration',
      'Omnivorous scavengers and algae eaters',
      'Light body with fine dark spotted pattern',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Elegant Corydoras with fine spotted pattern living up to its name. More sensitive than common species but beautiful in planted tanks.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-26°C (73-78°F)',
        ph: '6.0-7.0',
        hardness: '2-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'weitzmani-cory',
    name: 'Weitzmani Cory',
    category: 'Catfish',
    scientificName: 'Corydoras weitzmani',
    compatibility: compatibilityMatrix['weitzmani-cory'] || {},
    quickFacts: [
      'Beautiful golden and black coloration',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common Corydoras',
      'Stunning color combination when mature',
      'Omnivorous scavengers and algae eaters',
      'Golden body with distinctive black markings',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Corydoras with golden coloration and black markings. More sensitive than common species but highly prized for stunning appearance.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-80°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'rabauti-cory',
    name: 'Rabauti Cory',
    category: 'Catfish',
    scientificName: 'Corydoras rabauti',
    compatibility: compatibilityMatrix['rabauti-cory'] || {},
    quickFacts: [
      'Orange and black striped pattern',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than Bronze Corydoras',
      'Beautiful orange coloration with black lines',
      'Omnivorous scavengers and algae eaters',
      'Orange body with prominent black stripes',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Striking Corydoras with orange and black striped pattern. More sensitive than common species and requires stable water conditions.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-26°C (73-78°F)',
        ph: '6.0-7.0',
        hardness: '2-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'sodalis-cory',
    name: 'Sodalis Cory',
    category: 'Catfish',
    scientificName: 'Corydoras sodalis',
    compatibility: compatibilityMatrix['sodalis-cory'] || {},
    quickFacts: [
      'Beautiful reticulated black pattern',
      'Peaceful bottom dwellers that need groups of 6+',
      'More sensitive than common species',
      'Distinctive network-like markings',
      'Omnivorous scavengers and algae eaters',
      'Silver body with black reticulated pattern',
      'Live 4-6 years with good care',
      'Need soft substrate to protect barbels',
      'Intermediate level community fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Beautiful Corydoras with intricate reticulated black pattern. More sensitive than common species and requires stable conditions.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-80°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'loretoensis-cory',
    name: 'Loreto Cory',
    category: 'Catfish',
    scientificName: 'Corydoras loretoensis',
    compatibility: compatibilityMatrix['loretoensis-cory'] || {},
    quickFacts: [
      'Spotted pattern with prominent dorsal stripe',
      'Peaceful bottom dwellers that need groups of 6+',
      'Hardy and adaptable species',
      'Distinctive spotted body pattern',
      'Omnivorous scavengers and algae eaters',
      'Light body with dark spots and stripe',
      'Live 5-7 years with good care',
      'Need soft substrate to protect barbels',
      'Beginner to intermediate level fish',
      'Active during day, social and peaceful'
    ],
    detailedInfo: {
      description: 'Hardy Corydoras with spotted pattern and prominent dorsal stripe. Good choice for beginners seeking something different from common species.',
      size: '6.5 cm (2.6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'common-pleco',
    name: 'Common Pleco',
    category: 'Catfish',
    scientificName: 'Hypostomus plecostomus',
    compatibility: compatibilityMatrix['common-pleco'] || {},
    quickFacts: [
      'Large algae-eating catfish that grows very big',
      'Can reach 30-45 cm (12-18 inches) in aquariums',
      'Nocturnal and secretive during the day',
      'Requires very large tanks 200+ gallons when adult',
      'Herbivorous diet supplemented with vegetables',
      'Produces large amounts of waste',
      'Lives 10-15+ years with proper care',
      'Often outgrows home aquariums',
      'Needs driftwood for rasping and digestion',
      'Peaceful but territorial with other plecos'
    ],
    detailedInfo: {
      description: 'Large pleco that requires massive tanks when adult. Often sold as small juveniles but grows extremely large.',
      size: '30-45 cm (12-18 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '750+ litres (200+ gallons) when adult',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'bristlenose-pleco',
    name: 'Bristlenose Pleco',
    category: 'Catfish',
    scientificName: 'Ancistrus sp.',
    compatibility: compatibilityMatrix['bristlenose-pleco'] || {},
    quickFacts: [
      'Small pleco perfect for home aquariums',
      'Males develop distinctive bristles on snout',
      'Excellent algae eater and cleanup crew',
      'Stays reasonably small at 10-15 cm (4-6 inches)',
      'Herbivorous diet with vegetable supplements',
      'Breeds readily in aquariums',
      'Lives 5-8 years with proper care',
      'Much better choice than Common Pleco',
      'Needs driftwood for rasping and digestion',
      'Peaceful and suitable for community tanks'
    ],
    detailedInfo: {
      description: 'Popular small pleco that stays manageable size. Males develop characteristic bristles and are excellent algae eaters.',
      size: '10-15 cm (4-6 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'zebra-pleco',
    name: 'Zebra Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus zebra',
    compatibility: compatibilityMatrix['zebra-pleco'] || {},
    quickFacts: [
      'Rare and expensive black and white striped pleco',
      'Small size makes it perfect for smaller tanks',
      'Carnivorous unlike most plecos',
      'Requires high water quality and warm temperatures',
      'Peaceful but can be territorial with other plecos',
      'Needs caves and hiding spots for security',
      'Lives 6-10 years with excellent care',
      'Very sensitive to water parameters',
      'Commands high prices due to rarity',
      'Protected species with export restrictions'
    ],
    detailedInfo: {
      description: 'Extremely rare and expensive pleco with striking black and white stripes. Requires specialized care and warm water.',
      size: '8 cm (3.2 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '26-30°C (79-86°F)',
        ph: '6.0-7.0',
        hardness: '1-10 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '6-10 years'
    }
  },
  {
    id: 'royal-pleco',
    name: 'Royal Pleco',
    category: 'Catfish',
    scientificName: 'Panaque nigrolineatus',
    compatibility: compatibilityMatrix['royal-pleco'] || {},
    quickFacts: [
      'Large, impressive pleco with distinctive patterns',
      'Can reach 40+ cm (16+ inches) in aquariums',
      'Requires massive tanks when fully grown',
      'Herbivorous with strong wood-eating tendencies',
      'Produces enormous amounts of waste',
      'Needs large pieces of driftwood',
      'Lives 10-15+ years with proper care',
      'Beautiful but often outgrows home tanks',
      'Young specimens are more manageable',
      'Peaceful but territorial with other large plecos'
    ],
    detailedInfo: {
      description: 'Large, magnificent pleco with striking patterns. Requires huge tanks and produces massive amounts of waste when adult.',
      size: '40+ cm (16+ inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '1000+ litres (250+ gallons) when adult',
      waterParams: {
        temperature: '24-30°C (75-86°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'clown-pleco',
    name: 'Clown Pleco',
    category: 'Catfish',
    scientificName: 'Panaqolus maccus',
    compatibility: compatibilityMatrix['clown-pleco'] || {},
    quickFacts: [
      'Small, colorful pleco perfect for community tanks',
      'Stays small at 8-10 cm (3-4 inches)',
      'Peaceful and suitable for smaller aquariums',
      'Beautiful banded pattern with orange fins',
      'Herbivorous diet requiring driftwood',
      'Much more manageable than larger plecos',
      'Lives 6-10 years with proper care',
      'Great algae eater for community tanks',
      'Needs caves and hiding spots',
      'Active during evening and night hours'
    ],
    detailedInfo: {
      description: 'Small, beautifully patterned pleco that stays manageable size. Perfect alternative to larger plecos for community tanks.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '6-10 years'
    }
  },
  {
    id: 'leopard-frog-pleco',
    name: 'Leopard Frog Pleco',
    category: 'Catfish',
    scientificName: 'Peckoltia compta',
    compatibility: compatibilityMatrix['leopard-frog-pleco'] || {},
    quickFacts: [
      'Small pleco with striking leopard-like spots',
      'Stays reasonably small at 7-9 cm (3-3.5 inches)',
      'Peaceful and suitable for community tanks',
      'Beautiful spotted pattern resembling leopard',
      'Omnivorous diet with some carnivorous tendencies',
      'More active than many pleco species',
      'Lives 6-8 years with proper care',
      'Needs caves and hiding spots',
      'Can be territorial with other plecos',
      'Active during evening hours'
    ],
    detailedInfo: {
      description: 'Beautiful small pleco with leopard-like spotted pattern. More active and carnivorous than most plecos.',
      size: '7-9 cm (3-3.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '6-8 years'
    }
  },
  {
    id: 'gold-nugget-pleco',
    name: 'Gold Nugget Pleco',
    category: 'Catfish',
    scientificName: 'Baryancistrus xanthellus',
    compatibility: compatibilityMatrix['gold-nugget-pleco'] || {},
    quickFacts: [
      'Stunning black pleco with bright yellow spots',
      'Medium-sized pleco reaching 17-20 cm (7-8 inches)',
      'Requires excellent water quality and flow',
      'Peaceful but territorial with other plecos',
      'Herbivorous diet requiring vegetables',
      'Beautiful contrast of black and golden spots',
      'Lives 8-12 years with excellent care',
      'Needs strong current and high oxygenation',
      'Commands premium prices due to beauty',
      'Sensitive to water quality degradation'
    ],
    detailedInfo: {
      description: 'Spectacular pleco with jet black body and bright golden spots. Requires excellent water quality and strong current.',
      size: '17-20 cm (7-8 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'sultan-pleco',
    name: 'Sultan Pleco',
    category: 'Catfish',
    scientificName: 'Leporacanthicus joselimai',
    compatibility: compatibilityMatrix['sultan-pleco'] || {},
    quickFacts: [
      'Large, impressive pleco with polka dot pattern',
      'Grows large reaching 25-30 cm (10-12 inches)',
      'More carnivorous than most plecos',
      'Peaceful but requires large tank space',
      'Beautiful white spots on dark background',
      'Needs strong current and excellent filtration',
      'Lives 10-15 years with proper care',
      'Expensive due to attractive appearance',
      'Territorial with other large plecos',
      'Active predator that hunts small fish'
    ],
    detailedInfo: {
      description: 'Large, striking pleco with beautiful polka dot pattern. More predatory than typical plecos and requires large tanks.',
      size: '25-30 cm (10-12 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Carnivorous',
      tankSize: '500+ litres (125+ gallons)',
      waterParams: {
        temperature: '25-29°C (77-84°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'vampire-pleco',
    name: 'Vampire Pleco',
    category: 'Catfish',
    scientificName: 'Leporacanthicus vampyrus',
    compatibility: compatibilityMatrix['vampire-pleco'] || {},
    quickFacts: [
      'Large, dramatic pleco with spotted pattern',
      'Grows very large reaching 30+ cm (12+ inches)',
      'Carnivorous predator unlike most plecos',
      'Requires massive tanks when adult',
      'Beautiful white/yellow spots on black body',
      'Needs strong current and excellent filtration',
      'Lives 10-15+ years with proper care',
      'Will eat smaller fish - not community safe',
      'Territorial and aggressive with other plecos',
      'Active predator especially at night'
    ],
    detailedInfo: {
      description: 'Large, predatory pleco that will eat smaller fish. Beautiful but requires massive tanks and careful tank mate selection.',
      size: '30+ cm (12+ inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '750+ litres (200+ gallons)',
      waterParams: {
        temperature: '25-29°C (77-84°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'l144-blue-eyed-lemon-bristlenose',
    name: 'L144 Blue-Eyed Lemon Bristlenose',
    category: 'Catfish',
    scientificName: 'Ancistrus dolichopterus var.',
    compatibility: compatibilityMatrix['l144-blue-eyed-lemon-bristlenose'] || {},
    quickFacts: [
      'Beautiful yellow/lemon coloration with striking blue eyes',
      'Small peaceful pleco reaching 10-12 cm (4-5 inches)',
      'Excellent algae eater for community tanks',
      'Hardy and easy to keep for beginners',
      'Males develop bristles on snout when mature',
      'Caves and hiding spots essential for breeding',
      'Lives 5-8 years with proper care',
      'Active during daytime unlike many plecos',
      'Peaceful with all tank mates',
      'Great starter pleco species'
    ],
    detailedInfo: {
      description: 'Stunning bristlenose pleco variant with bright yellow coloration and beautiful blue eyes. Perfect community tank algae eater.',
      size: '10-12 cm (4-5 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '6-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'l200-green-phantom',
    name: 'L200 Green Phantom Pleco',
    category: 'Catfish',
    scientificName: 'Hemiancistrus subviridis',
    compatibility: compatibilityMatrix['l200-green-phantom'] || {},
    quickFacts: [
      'Beautiful green spotted pattern on dark background',
      'Medium-sized pleco reaching 20-25 cm (8-10 inches)',
      'More carnivorous than typical plecos',
      'Territorial with other bottom dwellers',
      'Requires excellent water quality and flow',
      'Expensive and sought-after aquarium species',
      'Lives 8-12 years with proper care',
      'Needs caves and strong current',
      'Moderate to advanced care requirements',
      'Worth the investment for dedicated aquarists'
    ],
    detailedInfo: {
      description: 'Stunning pleco with beautiful green spots and more predatory behavior than typical algae-eating plecos.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous (carnivorous preference)',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.0',
        hardness: '1-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'l600-megalancistrus',
    name: 'L600 Megalancistrus',
    category: 'Catfish',
    scientificName: 'Megalancistrus parananus',
    compatibility: compatibilityMatrix['l600-megalancistrus'] || {},
    quickFacts: [
      'Massive pleco that can reach 45+ cm (18+ inches)',
      'Beautiful spotted pattern throughout body',
      'Requires enormous tanks when fully grown',
      'Extremely powerful and can move decorations',
      'Lives 15+ years with proper care',
      'Produces massive amounts of waste',
      'Peaceful despite its enormous size',
      'Only for dedicated large tank keepers',
      'Excellent algae eater when young',
      'Can live decades with proper care'
    ],
    detailedInfo: {
      description: 'One of the largest plecos available in the hobby. Beautiful but requires massive tank systems to house properly.',
      size: '40-45+ cm (16-18+ inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '1000+ litres (250+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-20+ years'
    }
  },
  {
    id: 'l333-king-tiger',
    name: 'L333 King Tiger Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp.',
    compatibility: compatibilityMatrix['l333-king-tiger'] || {},
    quickFacts: [
      'Stunning black and white striped pattern',
      'Medium-sized pleco reaching 15-18 cm (6-7 inches)',
      'More carnivorous diet than typical plecos',
      'Prefers soft, acidic water conditions',
      'Requires caves and hiding spots',
      'Expensive and sought-after species',
      'Lives 8-12 years with proper care',
      'Very sensitive to water quality',
      'Breeding requires specific conditions',
      'Peaceful but territorial with own kind'
    ],
    detailedInfo: {
      description: 'Beautiful tiger-striped pleco with more carnivorous feeding habits. Requires excellent water conditions and care.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous (carnivorous preference)',
      tankSize: '250+ litres (65+ gallons)',
      waterParams: {
        temperature: '26-30°C (79-86°F)',
        ph: '6.0-7.0',
        hardness: '1-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'l397-alenquer-tiger',
    name: 'L397 Alenquer Tiger Pleco',
    category: 'Catfish',
    scientificName: 'Panaqolus sp.',
    compatibility: compatibilityMatrix['l397-alenquer-tiger'] || {},
    quickFacts: [
      'Beautiful orange and black tiger pattern',
      'Medium-sized pleco reaching 12-15 cm (5-6 inches)',
      'Excellent wood rasper and algae eater',
      'Peaceful and suitable for community tanks',
      'Requires driftwood in diet',
      'Hardy and adaptable to various conditions',
      'Lives 6-10 years with proper care',
      'Active during both day and night',
      'Great personality and interactive',
      'Moderately priced and available'
    ],
    detailedInfo: {
      description: 'Attractive tiger-patterned pleco that combines beauty with practical algae and wood eating abilities.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous (wood rasper)',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '6-10 years'
    }
  },
  {
    id: 'l260-queen-arabesque',
    name: 'L260 Queen Arabesque Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp.',
    compatibility: compatibilityMatrix['l260-queen-arabesque'] || {},
    quickFacts: [
      'Intricate black and white arabesque pattern',
      'Small to medium pleco reaching 8-12 cm (3-5 inches)',
      'Perfect for community tanks',
      'Peaceful and easy to maintain',
      'Beautiful contrasting colors',
      'Good algae eater for its size',
      'Lives 5-8 years with proper care',
      'Hardy and beginner-friendly',
      'Active and visible during day',
      'Great value for money'
    ],
    detailedInfo: {
      description: 'Beautiful arabesque-patterned pleco with excellent community tank behavior and moderate care requirements.',
      size: '8-12 cm (3-5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'l066-king-tiger-pleco',
    name: 'L066 King Tiger Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp.',
    compatibility: compatibilityMatrix['l066-king-tiger-pleco'] || {},
    quickFacts: [
      'Bold black and white striped pattern',
      'Medium-sized pleco reaching 14-16 cm (5.5-6.5 inches)',
      'More carnivorous than typical algae eaters',
      'Requires caves and current in aquarium',
      'Sensitive to water quality changes',
      'Expensive but highly sought after',
      'Lives 8-12 years with proper care',
      'Territorial with other plecos',
      'Breeding requires specific setup',
      'Stunning centerpiece fish for pleco tanks'
    ],
    detailedInfo: {
      description: 'Premium tiger pleco with bold stripes and carnivorous habits. Requires excellent care but rewards with stunning appearance.',
      size: '14-16 cm (5.5-6.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous (carnivorous preference)',
      tankSize: '250+ litres (65+ gallons)',
      waterParams: {
        temperature: '26-30°C (79-86°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'l177-gold-nugget-variant',
    name: 'L177 Gold Nugget Pleco',
    category: 'Catfish',
    scientificName: 'Baryancistrus sp.',
    compatibility: compatibilityMatrix['l177-gold-nugget-variant'] || {},
    quickFacts: [
      'Beautiful gold spotted pattern on dark body',
      'Large pleco reaching 25-30 cm (10-12 inches)',
      'Excellent algae eater and aquarium cleaner',
      'Requires strong current and excellent filtration',
      'Peaceful but needs large tank space',
      'Highly prized in the aquarium trade',
      'Lives 10-15 years with proper care',
      'Produces significant waste when adult',
      'Active and visible during feeding',
      'Worth the investment for serious keepers'
    ],
    detailedInfo: {
      description: 'Highly prized pleco with beautiful gold spots. Excellent algae eater that requires substantial tank space when mature.',
      size: '25-30 cm (10-12 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '400+ litres (100+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'l129-colombian-zebra',
    name: 'L129 Colombian Zebra Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus debilittera',
    compatibility: compatibilityMatrix['l129-colombian-zebra'] || {},
    quickFacts: [
      'Beautiful black and white zebra stripes',
      'Small pleco reaching 6-8 cm (2.5-3 inches)',
      'Perfect for smaller aquarium systems',
      'Peaceful and community-tank suitable',
      'More omnivorous than pure algae eaters',
      'Easy to maintain once established',
      'Lives 5-8 years with proper care',
      'Great choice for nano pleco enthusiasts',
      'Active and entertaining to watch',
      'Moderately priced compared to other L-numbers'
    ],
    detailedInfo: {
      description: 'Small zebra-striped pleco perfect for smaller tanks. Great personality and easier care than many L-number plecos.',
      size: '6-8 cm (2.5-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'l002-tiger-pleco',
    name: 'L002 Tiger Pleco',
    category: 'Catfish',
    scientificName: 'Panaque cochliodon',
    compatibility: compatibilityMatrix['l002-tiger-pleco'] || {},
    quickFacts: [
      'Classic tiger pattern with bold stripes',
      'Large pleco reaching 30-40 cm (12-16 inches)',
      'Excellent wood rasper and algae consumer',
      'Requires massive amounts of driftwood',
      'Peaceful but needs substantial tank space',
      'One of the original L-number plecos',
      'Lives 12-20 years with proper care',
      'Produces enormous amounts of waste',
      'Very hardy once established',
      'Classic choice for large pleco tanks'
    ],
    detailedInfo: {
      description: 'Classic large tiger pleco that requires substantial tank space and wood consumption. Hardy and long-lived.',
      size: '30-40 cm (12-16 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous (wood rasper)',
      tankSize: '600+ litres (150+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '12-20 years'
    }
  },
  {
    id: 'l075-orange-seam',
    name: 'L075 Orange Seam Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp.',
    compatibility: compatibilityMatrix['l075-orange-seam'] || {},
    quickFacts: [
      'Beautiful orange trim on fins and seams',
      'Small to medium pleco reaching 7-10 cm (3-4 inches)',
      'Perfect for community aquarium setups',
      'Peaceful and easy to maintain',
      'Good algae eater for its size',
      'Attractive orange color accents',
      'Lives 5-8 years with proper care',
      'Hardy and beginner-suitable',
      'Active during feeding times',
      'Great starter L-number pleco'
    ],
    detailedInfo: {
      description: 'Attractive small pleco with beautiful orange fin accents. Perfect community tank fish with easy care requirements.',
      size: '7-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '120+ litres (30+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'l471-dwarf-spotted',
    name: 'L471 Dwarf Spotted Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp.',
    compatibility: compatibilityMatrix['l471-dwarf-spotted'] || {},
    quickFacts: [
      'Tiny spotted pleco reaching only 4-6 cm (1.5-2.5 inches)',
      'Perfect for nano tanks and small aquariums',
      'Beautiful small white spots on dark body',
      'Peaceful and suitable for shrimp tanks',
      'Easy to maintain and hardy',
      'Great algae control for small tanks',
      'Lives 4-6 years with proper care',
      'Active and entertaining despite small size',
      'Ideal for aquarists with space limitations',
      'One of the smallest L-number plecos'
    ],
    detailedInfo: {
      description: 'One of the smallest plecos available, perfect for nano tanks. Beautiful spots and excellent algae control.',
      size: '4-6 cm (1.5-2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'l236-super-white',
    name: 'L236 Super White Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp.',
    compatibility: compatibilityMatrix['l236-super-white'] || {},
    quickFacts: [
      'Stunning pure white coloration with black spots',
      'Small pleco reaching 8-10 cm (3-4 inches)',
      'One of the most beautiful plecos available',
      'Peaceful and community tank suitable',
      'Requires excellent water quality',
      'Highly sought after and expensive',
      'Lives 6-10 years with proper care',
      'More carnivorous than typical plecos',
      'Breeding achievement for advanced keepers',
      'True showpiece fish for any aquarium'
    ],
    detailedInfo: {
      description: 'Absolutely stunning white pleco with black spots. One of the most beautiful freshwater fish available.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous (carnivorous preference)',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '26-30°C (79-86°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '6-10 years'
    }
  },
  {
    id: 'l404-titanic-pleco',
    name: 'L404 Titanic Pleco',
    category: 'Catfish',
    scientificName: 'Leporacanthicus heterodon',
    compatibility: compatibilityMatrix['l404-titanic-pleco'] || {},
    quickFacts: [
      'Enormous pleco that can reach 50+ cm (20+ inches)',
      'Beautiful spotted pattern with vampire-like teeth',
      'Requires absolutely massive tank systems',
      'More carnivorous than typical plecos',
      'Lives 15-25 years with proper care',
      'Only for the most dedicated large tank keepers',
      'Produces extreme amounts of waste',
      'Peaceful but can intimidate smaller fish',
      'Rare and expensive in the trade',
      'Ultimate challenge fish for pleco enthusiasts'
    ],
    detailedInfo: {
      description: 'One of the largest plecos available. Requires enormous tanks and expert care but rewards with incredible presence.',
      size: '45-50+ cm (18-20+ inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous (carnivorous preference)',
      tankSize: '1500+ litres (400+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-25 years'
    }
  },
  {
    id: 'zebra-danio',
    name: 'Zebra Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio rerio',
    compatibility: compatibilityMatrix['zebra-danio'] || {},
    quickFacts: [
      'Most popular and hardy danio species',
      'Small active schooling fish reaching 4-5 cm (1.5-2 inches)',
      'Perfect beginner fish, extremely easy to care for',
      'Active swimmers that need groups of 6+ fish',
      'Hardy and tolerates wide range of water conditions',
      'Great for community tanks with peaceful fish',
      'Lives 3-5 years with proper care',
      'Constantly active during day, peaceful temperament',
      'Excellent dither fish for shy species',
      'Inexpensive and widely available'
    ],
    detailedInfo: {
      description: 'The classic aquarium fish and perfect beginner species. Extremely hardy, active, and peaceful schooling fish.',
      size: '4-5 cm (1.5-2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-25°C (64-77°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'pearl-danio',
    name: 'Pearl Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio albolineatus',
    compatibility: compatibilityMatrix['pearl-danio'] || {},
    quickFacts: [
      'Beautiful iridescent pearl-like coloration',
      'Larger danio reaching 6 cm (2.5 inches)',
      'Hardy and easy to care for like zebra danios',
      'Active schooling fish needing groups of 6+',
      'More heat tolerant than zebra danios',
      'Great community tank fish with peaceful nature',
      'Lives 3-5 years with proper care',
      'Fast swimmer that needs open space',
      'Good dither fish for larger community tanks',
      'Readily available and reasonably priced'
    ],
    detailedInfo: {
      description: 'Larger, more colorful cousin of zebra danio with beautiful pearl iridescence. Hardy community fish.',
      size: '6 cm (2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'giant-danio',
    name: 'Giant Danio',
    category: 'Danios & Minnows',
    scientificName: 'Devario aequipinnatus',
    compatibility: compatibilityMatrix['giant-danio'] || {},
    quickFacts: [
      'Largest danio species reaching 10-12 cm (4-5 inches)',
      'Very active swimmers needing large tanks',
      'Schooling fish requiring groups of 6+ individuals',
      'Can be intimidating to smaller tank mates',
      'Hardy and easy to care for despite size',
      'Needs plenty of open swimming space',
      'Lives 5-7 years with proper care',
      'Powerful swimmers that can jump out of tanks',
      'Beautiful blue and yellow striped pattern',
      'Too active for small or heavily planted tanks'
    ],
    detailedInfo: {
      description: 'Large, extremely active danio that needs spacious tanks. Beautiful but requires careful tank mate selection.',
      size: '10-12 cm (4-5 inches)',
      temperament: 'Peaceful (but boisterous)',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-7 years'
    }
  },
  {
    id: 'leopard-danio',
    name: 'Leopard Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio rerio var.',
    compatibility: compatibilityMatrix['leopard-danio'] || {},
    quickFacts: [
      'Spotted variety of zebra danio with leopard pattern',
      'Same size and care as zebra danio at 4-5 cm',
      'Extremely hardy and beginner-friendly',
      'Active schooling fish needing groups of 6+',
      'Can be mixed with regular zebra danios',
      'Beautiful spotted pattern instead of stripes',
      'Lives 3-5 years with proper care',
      'Perfect community tank fish',
      'Very active during daylight hours',
      'Inexpensive and widely available'
    ],
    detailedInfo: {
      description: 'Spotted color variety of the classic zebra danio. Same excellent beginner qualities with unique leopard pattern.',
      size: '4-5 cm (1.5-2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-25°C (64-77°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'blue-danio',
    name: 'Blue Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio kerri',
    compatibility: compatibilityMatrix['blue-danio'] || {},
    quickFacts: [
      'Beautiful bright blue coloration with subtle stripes',
      'Medium-sized danio reaching 5-6 cm (2-2.5 inches)',
      'Hardy and easy to care for',
      'Active schooling fish needing groups of 6+',
      'More colorful than zebra danios',
      'Great community tank fish with peaceful nature',
      'Lives 3-5 years with proper care',
      'Active swimmer needing open swimming space',
      'Tolerates wide range of water conditions',
      'Less common but worth seeking out'
    ],
    detailedInfo: {
      description: 'Attractive blue-colored danio with excellent community tank qualities. More colorful alternative to zebra danios.',
      size: '5-6 cm (2-2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'glowlight-danio',
    name: 'Glowlight Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio choprae',
    compatibility: compatibilityMatrix['glowlight-danio'] || {},
    quickFacts: [
      'Beautiful orange and blue coloration',
      'Small danio reaching 3-4 cm (1-1.5 inches)',
      'More sensitive than zebra danios',
      'Active schooling fish needing groups of 8+',
      'Stunning colors under good lighting',
      'Peaceful and suitable for community tanks',
      'Lives 3-4 years with proper care',
      'Prefers softer, slightly acidic water',
      'More expensive than common danios',
      'Worth the extra cost for the beauty'
    ],
    detailedInfo: {
      description: 'One of the most beautiful danios with stunning orange and blue colors. Slightly more sensitive than zebra danios.',
      size: '3-4 cm (1-1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-4 years'
    }
  },
  {
    id: 'galaxy-rasbora',
    name: 'Galaxy Rasbora (Celestial Pearl Danio)',
    category: 'Danios & Minnows',
    scientificName: 'Danio margaritatus',
    compatibility: compatibilityMatrix['galaxy-rasbora'] || {},
    quickFacts: [
      'Tiny jewel-like fish with pearl spots on dark body',
      'Very small reaching only 2-3 cm (0.8-1.2 inches)',
      'More sensitive than other danios',
      'Schooling fish needing groups of 10+ for confidence',
      'Stunning colors with orange fins and pearl spots',
      'Perfect for nano tanks and peaceful communities',
      'Lives 3-4 years with proper care',
      'Can be shy without adequate group size',
      'More expensive but absolutely beautiful',
      'Also known as Celestial Pearl Danio'
    ],
    detailedInfo: {
      description: 'Tiny, absolutely stunning fish with pearl spots and orange fins. Perfect for nano tanks but needs groups.',
      size: '2-3 cm (0.8-1.2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous (small foods)',
      tankSize: '50+ litres (15+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-4 years'
    }
  },
  {
    id: 'orange-finned-danio',
    name: 'Orange-Finned Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio kyathit',
    compatibility: compatibilityMatrix['orange-finned-danio'] || {},
    quickFacts: [
      'Beautiful orange fins contrasting with silver body',
      'Medium-sized danio reaching 5-6 cm (2-2.5 inches)',
      'Hardy and easy to care for',
      'Active schooling fish needing groups of 6+',
      'Distinctive orange fin coloration',
      'Great community tank fish',
      'Lives 3-5 years with proper care',
      'Active swimmer needing swimming space',
      'Less common than zebra danios',
      'Good alternative to pearl danios'
    ],
    detailedInfo: {
      description: 'Attractive danio with distinctive orange fins. Hardy community fish with excellent beginner qualities.',
      size: '5-6 cm (2-2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'rosy-danio',
    name: 'Rosy Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio roseus',
    compatibility: compatibilityMatrix['rosy-danio'] || {},
    quickFacts: [
      'Subtle pink and silver coloration',
      'Medium-sized danio reaching 4-5 cm (1.5-2 inches)',
      'Hardy and beginner-friendly',
      'Active schooling fish needing groups of 6+',
      'Peaceful temperament ideal for communities',
      'More subdued colors than other danios',
      'Lives 3-5 years with proper care',
      'Active during day, peaceful with tank mates',
      'Less flashy but still attractive',
      'Good choice for natural-looking setups'
    ],
    detailedInfo: {
      description: 'Subtly colored danio with pink and silver tones. Hardy beginner fish with peaceful community qualities.',
      size: '4-5 cm (1.5-2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'spotted-danio',
    name: 'Spotted Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio nigrofasciatus',
    compatibility: compatibilityMatrix['spotted-danio'] || {},
    quickFacts: [
      'Distinctive black spots along silver body',
      'Small danio reaching 4 cm (1.5 inches)',
      'Hardy and easy to care for',
      'Active schooling fish needing groups of 6+',
      'Unique spotted pattern sets it apart',
      'Peaceful community tank fish',
      'Lives 3-4 years with proper care',
      'Active swimmer needing open space',
      'Less common than zebra danios',
      'Interesting pattern variation for danio keepers'
    ],
    detailedInfo: {
      description: 'Small danio with distinctive black spots. Hardy beginner fish with unique pattern among danio species.',
      size: '4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-4 years'
    }
  },
  {
    id: 'longfin-zebra-danio',
    name: 'Longfin Zebra Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio rerio var.',
    compatibility: compatibilityMatrix['longfin-zebra-danio'] || {},
    quickFacts: [
      'Longfin variety of classic zebra danio',
      'Same size as regular zebra danio at 4-5 cm',
      'Extremely hardy and beginner-friendly',
      'Active schooling fish needing groups of 6+',
      'Beautiful flowing fins add elegance',
      'Same care requirements as regular zebra danios',
      'Lives 3-5 years with proper care',
      'Can be mixed with regular zebra danios',
      'Fins may be nipped by aggressive fish',
      'More expensive than regular variety'
    ],
    detailedInfo: {
      description: 'Elegant longfin variety of zebra danio. Same excellent beginner qualities with beautiful flowing fins.',
      size: '4-5 cm (1.5-2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-25°C (64-77°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'turquoise-danio',
    name: 'Turquoise Danio',
    category: 'Danios & Minnows',
    scientificName: 'Danio kerri',
    compatibility: compatibilityMatrix['turquoise-danio'] || {},
    quickFacts: [
      'Beautiful turquoise blue coloration',
      'Medium-sized danio reaching 5-6 cm (2-2.5 inches)',
      'Hardy and easy to care for',
      'Active schooling fish needing groups of 6+',
      'Stunning blue-green iridescent colors',
      'Great community tank fish',
      'Lives 3-5 years with proper care',
      'Active swimmer needing swimming space',
      'More colorful than zebra danios',
      'Excellent choice for planted tanks'
    ],
    detailedInfo: {
      description: 'Beautiful turquoise-colored danio with excellent community tank qualities. More colorful alternative to zebra danios.',
      size: '5-6 cm (2-2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'white-cloud-mountain-minnow',
    name: 'White Cloud Mountain Minnow',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys albonubes',
    compatibility: compatibilityMatrix['white-cloud-mountain-minnow'] || {},
    quickFacts: [
      'Classic beginner coldwater fish',
      'Small peaceful schooling fish reaching 3-4 cm (1.5 inches)',
      'Hardy and tolerates cooler temperatures',
      'Active swimmers needing groups of 6+',
      'Beautiful silver body with red fins',
      'Great for unheated tanks',
      'Lives 3-5 years with proper care',
      'Peaceful temperament, excellent community fish',
      'Easy to breed in aquarium conditions',
      'Inexpensive and widely available'
    ],
    detailedInfo: {
      description: 'The classic coldwater aquarium fish. Hardy, peaceful, and perfect for beginners or unheated tanks.',
      size: '3-4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '15-22°C (59-72°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'gold-white-cloud-minnow',
    name: 'Gold White Cloud Minnow',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys albonubes var. gold',
    compatibility: compatibilityMatrix['gold-white-cloud-minnow'] || {},
    quickFacts: [
      'Golden color variant of white cloud minnow',
      'Small peaceful schooling fish reaching 3-4 cm (1.5 inches)',
      'Hardy coldwater fish tolerating cool temperatures',
      'Active swimmers needing groups of 6+',
      'Beautiful golden body with orange-red fins',
      'Great for unheated or cool tanks',
      'Lives 3-5 years with proper care',
      'Peaceful temperament, excellent community fish',
      'More colorful than standard white clouds',
      'Easy to care for beginner fish'
    ],
    detailedInfo: {
      description: 'Beautiful golden color variant of the classic white cloud minnow. Same hardy nature with enhanced coloration.',
      size: '3-4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '15-22°C (59-72°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'vietnamese-white-cloud',
    name: 'Vietnamese White Cloud',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys micagemmae',
    compatibility: compatibilityMatrix['vietnamese-white-cloud'] || {},
    quickFacts: [
      'Rare Vietnamese species similar to white cloud',
      'Small peaceful schooling fish reaching 2.5-3 cm (1 inch)',
      'Slightly more delicate than standard white clouds',
      'Active swimmers needing groups of 8+',
      'Beautiful iridescent silver body',
      'Prefers cooler water temperatures',
      'Lives 2-4 years with proper care',
      'Peaceful temperament, shy without groups',
      'Less common but stunning alternative',
      'Requires stable water conditions'
    ],
    detailedInfo: {
      description: 'Rare Vietnamese relative of the white cloud minnow. Slightly more delicate but equally beautiful.',
      size: '2.5-3 cm (1 inch)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '16-20°C (61-68°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'meteor-minnow',
    name: 'Meteor Minnow',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys albonubes var. meteor',
    compatibility: compatibilityMatrix['meteor-minnow'] || {},
    quickFacts: [
      'Fancy longfin variety of white cloud minnow',
      'Small peaceful schooling fish reaching 3-4 cm (1.5 inches)',
      'Hardy coldwater fish with beautiful flowing fins',
      'Active swimmers needing groups of 6+',
      'Longer fins than standard white clouds',
      'Great for unheated tanks',
      'Lives 3-5 years with proper care',
      'Peaceful temperament, excellent community fish',
      'More ornamental than standard variety',
      'Slightly more delicate due to longer fins'
    ],
    detailedInfo: {
      description: 'Fancy longfin variety of white cloud minnow with beautiful flowing fins. Same hardy nature as standard variety.',
      size: '3-4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '15-22°C (59-72°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'pink-white-cloud',
    name: 'Pink White Cloud',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys albonubes var. pink',
    compatibility: compatibilityMatrix['pink-white-cloud'] || {},
    quickFacts: [
      'Pink color variant of white cloud minnow',
      'Small peaceful schooling fish reaching 3-4 cm (1.5 inches)',
      'Hardy coldwater fish with pink coloration',
      'Active swimmers needing groups of 6+',
      'Beautiful pink body with red fins',
      'Great for unheated tanks',
      'Lives 3-5 years with proper care',
      'Peaceful temperament, excellent community fish',
      'Unique pink coloration variety',
      'Same care as standard white clouds'
    ],
    detailedInfo: {
      description: 'Unique pink color variant of white cloud minnow. Same hardy nature with distinctive pink coloration.',
      size: '3-4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '15-22°C (59-72°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'longfin-white-cloud',
    name: 'Longfin White Cloud',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys albonubes var. longfin',
    compatibility: compatibilityMatrix['longfin-white-cloud'] || {},
    quickFacts: [
      'Longfin variety of white cloud minnow',
      'Small peaceful schooling fish reaching 3-4 cm (1.5 inches)',
      'Hardy coldwater fish with extended fins',
      'Active swimmers needing groups of 6+',
      'Beautiful flowing fins and standard coloration',
      'Great for unheated tanks',
      'Lives 3-5 years with proper care',
      'Peaceful temperament, excellent community fish',
      'More ornamental than standard variety',
      'Slightly more delicate due to longer fins'
    ],
    detailedInfo: {
      description: 'Longfin variety of white cloud minnow with beautiful extended fins. Same hardy nature as standard variety.',
      size: '3-4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '15-22°C (59-72°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'vietnamese-cardinal-minnow',
    name: 'Vietnamese Cardinal Minnow',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys thacbaensis',
    compatibility: compatibilityMatrix['vietnamese-cardinal-minnow'] || {},
    quickFacts: [
      'Rare Vietnamese minnow species',
      'Very small peaceful schooling fish reaching 2-2.5 cm (0.8 inches)',
      'Delicate species requiring stable conditions',
      'Active swimmers needing large groups of 10+',
      'Beautiful red and blue coloration',
      'Prefers cooler water temperatures',
      'Lives 2-3 years with proper care',
      'Very peaceful, easily intimidated',
      'Stunning colors when properly maintained',
      'Best in species-only or very peaceful tanks'
    ],
    detailedInfo: {
      description: 'Rare and delicate Vietnamese minnow with stunning red and blue coloration. Requires experienced care.',
      size: '2-2.5 cm (0.8 inches)',
      temperament: 'Very Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '16-20°C (61-68°F)',
        ph: '6.0-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'chinese-hillstream-minnow',
    name: 'Chinese Hillstream Minnow',
    category: 'Danios & Minnows',
    scientificName: 'Tanichthys lin',
    compatibility: compatibilityMatrix['chinese-hillstream-minnow'] || {},
    quickFacts: [
      'Specialized hillstream minnow species',
      'Small peaceful fish reaching 3-4 cm (1.5 inches)',
      'Requires high flow and cool temperatures',
      'Active swimmers needing groups of 6+',
      'Adapted for fast-flowing water',
      'Needs excellent water quality',
      'Lives 3-4 years with proper care',
      'Peaceful but specialized care needs',
      'Beautiful in hillstream biotope setups',
      'Not suitable for standard community tanks'
    ],
    detailedInfo: {
      description: 'Specialized hillstream minnow requiring fast flow and cool temperatures. Best suited for biotope setups.',
      size: '3-4 cm (1.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '15-20°C (59-68°F)',
        ph: '6.5-7.5',
        hardness: '8-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '3-4 years'
    }
  },
  {
    id: 'harlequin-rasbora',
    name: 'Harlequin Rasbora',
    category: 'Rasboras',
    scientificName: 'Trigonostigma heteromorpha',
    compatibility: compatibilityMatrix['harlequin-rasbora'] || {},
    quickFacts: [
      'Most popular rasbora species',
      'Small peaceful schooling fish reaching 4.5 cm (1.8 inches)',
      'Hardy and easy to care for',
      'Active swimmers needing groups of 6+',
      'Beautiful orange-pink body with black triangle',
      'Great community tank fish',
      'Lives 3-5 years with proper care',
      'Active swimmer needing swimming space',
      'Perfect beginner rasbora',
      'Excellent for planted tanks'
    ],
    detailedInfo: {
      description: 'The most popular and hardy rasbora species. Perfect community fish with distinctive triangular marking.',
      size: '4.5 cm (1.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'lambchop-rasbora',
    name: 'Lambchop Rasbora',
    category: 'Rasboras',
    scientificName: 'Trigonostigma espei',
    compatibility: compatibilityMatrix['lambchop-rasbora'] || {},
    quickFacts: [
      'Smaller cousin of harlequin rasbora',
      'Small peaceful schooling fish reaching 3.5 cm (1.4 inches)',
      'Hardy and easy to care for',
      'Active swimmers needing groups of 8+',
      'Beautiful copper-orange body with black marking',
      'Great community tank fish',
      'Lives 3-5 years with proper care',
      'More delicate than harlequin rasbora',
      'Perfect for smaller planted tanks',
      'Excellent schooling behavior'
    ],
    detailedInfo: {
      description: 'Smaller, more delicate relative of harlequin rasbora. Beautiful copper coloration with excellent schooling behavior.',
      size: '3.5 cm (1.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-28°C (73-82°F)',
        ph: '5.5-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'scissortail-rasbora',
    name: 'Scissortail Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora trilineata',
    compatibility: compatibilityMatrix['scissortail-rasbora'] || {},
    quickFacts: [
      'Larger rasbora with distinctive tail marking',
      'Medium-sized schooling fish reaching 12-15 cm (5-6 inches)',
      'Hardy and active swimmer',
      'Needs groups of 6+ fish',
      'Silver body with scissor-like tail markings',
      'Great for larger community tanks',
      'Lives 4-6 years with proper care',
      'Fast swimmer needing swimming space',
      'More active than smaller rasboras',
      'Excellent dither fish for shy species'
    ],
    detailedInfo: {
      description: 'Large, active rasbora with distinctive scissor-like tail markings. Excellent for larger community tanks.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'redline-rasbora',
    name: 'Redline Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora pauciperforata',
    compatibility: compatibilityMatrix['redline-rasbora'] || {},
    quickFacts: [
      'Beautiful rasbora with red stripe',
      'Medium-sized schooling fish reaching 7 cm (2.8 inches)',
      'Hardy and peaceful temperament',
      'Active swimmers needing groups of 6+',
      'Silver body with distinctive red line',
      'Great community tank fish',
      'Lives 4-6 years with proper care',
      'More colorful than many rasboras',
      'Excellent for planted tanks',
      'Active middle to upper water swimmer'
    ],
    detailedInfo: {
      description: 'Beautiful rasbora with distinctive red line running along the body. Excellent community fish.',
      size: '7 cm (2.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'brilliant-rasbora',
    name: 'Brilliant Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora borapetensis',
    compatibility: compatibilityMatrix['brilliant-rasbora'] || {},
    quickFacts: [
      'Bright silver rasbora with orange fins',
      'Small schooling fish reaching 5 cm (2 inches)',
      'Hardy and active swimmer',
      'Active swimmers needing groups of 6+',
      'Brilliant silver body with orange-red fins',
      'Great community tank fish',
      'Lives 3-5 years with proper care',
      'Very active and energetic',
      'Excellent for planted tanks',
      'Similar care to harlequin rasbora'
    ],
    detailedInfo: {
      description: 'Active rasbora with brilliant silver coloration and orange fins. Very hardy community fish.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'emerald-rasbora',
    name: 'Emerald Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora dorsiocellata',
    compatibility: compatibilityMatrix['emerald-rasbora'] || {},
    quickFacts: [
      'Beautiful green-tinted rasbora',
      'Small schooling fish reaching 6 cm (2.4 inches)',
      'Hardy and peaceful temperament',
      'Active swimmers needing groups of 6+',
      'Greenish body with dark lateral stripe',
      'Great community tank fish',
      'Lives 4-6 years with proper care',
      'Less common but beautiful species',
      'Excellent for planted tanks',
      'Similar care to other rasboras'
    ],
    detailedInfo: {
      description: 'Less common rasbora with beautiful greenish coloration and dark lateral stripe.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'dwarf-rasbora',
    name: 'Dwarf Rasbora',
    category: 'Rasboras',
    scientificName: 'Boraras maculatus',
    compatibility: compatibilityMatrix['dwarf-rasbora'] || {},
    quickFacts: [
      'Tiny nano tank rasbora',
      'Very small schooling fish reaching 2.5 cm (1 inch)',
      'Peaceful but delicate species',
      'Active swimmers needing groups of 10+',
      'Red-orange body with dark spots',
      'Perfect for nano tanks',
      'Lives 2-3 years with proper care',
      'Requires stable water conditions',
      'Best with other small peaceful fish',
      'Excellent for heavily planted tanks'
    ],
    detailedInfo: {
      description: 'Tiny rasbora perfect for nano tanks. Delicate but beautiful with red-orange coloration.',
      size: '2.5 cm (1 inch)',
      temperament: 'Peaceful',
      diet: 'Micro foods',
      tankSize: '40+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.5-7.0',
        hardness: '3-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'chili-rasbora',
    name: 'Chili Rasbora',
    category: 'Rasboras',
    scientificName: 'Boraras brigittae',
    compatibility: compatibilityMatrix['chili-rasbora'] || {},
    quickFacts: [
      'Vibrant red nano rasbora',
      'Tiny schooling fish reaching 2 cm (0.8 inches)',
      'Peaceful but very delicate',
      'Active swimmers needing groups of 10+',
      'Bright red-orange body coloration',
      'Perfect for nano planted tanks',
      'Lives 2-3 years with proper care',
      'Requires excellent water quality',
      'Best in species-only or very peaceful tanks',
      'Stunning in large groups'
    ],
    detailedInfo: {
      description: 'The tiniest and most colorful rasbora. Vibrant red coloration but requires expert care.',
      size: '2 cm (0.8 inches)',
      temperament: 'Very Peaceful',
      diet: 'Micro foods',
      tankSize: '40+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.0-6.5',
        hardness: '3-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'phoenix-rasbora',
    name: 'Phoenix Rasbora',
    category: 'Rasboras',
    scientificName: 'Boraras merah',
    compatibility: compatibilityMatrix['phoenix-rasbora'] || {},
    quickFacts: [
      'Rare red and orange nano rasbora',
      'Tiny schooling fish reaching 2 cm (0.8 inches)',
      'Peaceful but very delicate',
      'Active swimmers needing groups of 10+',
      'Beautiful red-orange with dark markings',
      'Perfect for nano planted tanks',
      'Lives 2-3 years with proper care',
      'Requires stable soft water',
      'Very rare in aquarium trade',
      'Stunning colors when properly maintained'
    ],
    detailedInfo: {
      description: 'Extremely rare nano rasbora with stunning red-orange coloration. Requires expert care.',
      size: '2 cm (0.8 inches)',
      temperament: 'Very Peaceful',
      diet: 'Micro foods',
      tankSize: '40+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.0-6.5',
        hardness: '3-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'strawberry-rasbora',
    name: 'Strawberry Rasbora',
    category: 'Rasboras',
    scientificName: 'Boraras naevus',
    compatibility: compatibilityMatrix['strawberry-rasbora'] || {},
    quickFacts: [
      'Pink-red nano rasbora with spots',
      'Tiny schooling fish reaching 2 cm (0.8 inches)',
      'Peaceful but delicate species',
      'Active swimmers needing groups of 10+',
      'Pink-red body with dark spots',
      'Perfect for nano planted tanks',
      'Lives 2-3 years with proper care',
      'Requires soft, acidic water',
      'Less common than chili rasbora',
      'Beautiful in heavily planted tanks'
    ],
    detailedInfo: {
      description: 'Delicate nano rasbora with pink-red coloration and dark spots. Requires soft water conditions.',
      size: '2 cm (0.8 inches)',
      temperament: 'Very Peaceful',
      diet: 'Micro foods',
      tankSize: '40+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.0-6.5',
        hardness: '3-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'least-rasbora',
    name: 'Least Rasbora',
    category: 'Rasboras',
    scientificName: 'Boraras urophthalmoides',
    compatibility: compatibilityMatrix['least-rasbora'] || {},
    quickFacts: [
      'Smallest rasbora species',
      'Tiny schooling fish reaching 1.6 cm (0.6 inches)',
      'Peaceful but extremely delicate',
      'Active swimmers needing groups of 15+',
      'Translucent body with red markings',
      'Perfect for very small nano tanks',
      'Lives 2-3 years with proper care',
      'Requires pristine water conditions',
      'Very challenging to maintain',
      'Most delicate of all rasboras'
    ],
    detailedInfo: {
      description: 'The smallest rasbora species. Extremely delicate and requires expert-level care.',
      size: '1.6 cm (0.6 inches)',
      temperament: 'Very Peaceful',
      diet: 'Micro foods only',
      tankSize: '30+ litres (8+ gallons)',
      waterParams: {
        temperature: '25-28°C (77-82°F)',
        ph: '5.0-6.0',
        hardness: '2-6 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'fire-rasbora',
    name: 'Fire Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasboroides vaterifloris',
    compatibility: compatibilityMatrix['fire-rasbora'] || {},
    quickFacts: [
      'Bright orange nano rasbora',
      'Small schooling fish reaching 3 cm (1.2 inches)',
      'Peaceful but somewhat delicate',
      'Active swimmers needing groups of 8+',
      'Bright orange-red body coloration',
      'Great for nano planted tanks',
      'Lives 3-4 years with proper care',
      'More hardy than Boraras species',
      'Beautiful contrasting colors',
      'Active middle water swimmer'
    ],
    detailedInfo: {
      description: 'Beautiful nano rasbora with bright orange coloration. More hardy than other nano rasboras.',
      size: '3 cm (1.2 inches)',
      temperament: 'Peaceful',
      diet: 'Small foods',
      tankSize: '60+ litres (15+ gallons)',
      waterParams: {
        temperature: '23-27°C (73-81°F)',
        ph: '6.0-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-4 years'
    }
  },
  {
    id: 'giant-rasbora',
    name: 'Giant Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora daniconius',
    compatibility: compatibilityMatrix['giant-rasbora'] || {},
    quickFacts: [
      'Largest rasbora species',
      'Large schooling fish reaching 15-20 cm (6-8 inches)',
      'Hardy and active swimmer',
      'Needs groups of 6+ fish',
      'Silver body with blue-green sheen',
      'Great for large community tanks',
      'Lives 5-8 years with proper care',
      'Fast swimmer needing lots of space',
      'Can intimidate very small fish',
      'Excellent dither fish for larger species'
    ],
    detailedInfo: {
      description: 'The largest rasbora species. Hardy and active, perfect for large community tanks.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'yellow-rasbora',
    name: 'Yellow Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora lutea',
    compatibility: compatibilityMatrix['yellow-rasbora'] || {},
    quickFacts: [
      'Beautiful yellow-bodied rasbora',
      'Medium schooling fish reaching 8 cm (3.2 inches)',
      'Hardy and peaceful temperament',
      'Active swimmers needing groups of 6+',
      'Bright yellow body with silver highlights',
      'Great community tank fish',
      'Lives 4-6 years with proper care',
      'Less common but very attractive',
      'Excellent for planted tanks',
      'Active middle to upper water swimmer'
    ],
    detailedInfo: {
      description: 'Less common rasbora with beautiful bright yellow coloration. Hardy and peaceful.',
      size: '8 cm (3.2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'black-line-rasbora',
    name: 'Black Line Rasbora',
    category: 'Rasboras',
    scientificName: 'Rasbora nigrofasciata',
    compatibility: compatibilityMatrix['black-line-rasbora'] || {},
    quickFacts: [
      'Striking rasbora with black lateral line',
      'Medium schooling fish reaching 6 cm (2.4 inches)',
      'Hardy and peaceful temperament',
      'Active swimmers needing groups of 6+',
      'Silver body with prominent black line',
      'Great community tank fish',
      'Lives 4-6 years with proper care',
      'Very distinctive appearance',
      'Excellent for planted tanks',
      'Easy to identify by black stripe'
    ],
    detailedInfo: {
      description: 'Distinctive rasbora with prominent black lateral line. Hardy and easy to care for.',
      size: '6 cm (2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'brown-discus',
    name: 'Brown Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus',
    compatibility: compatibilityMatrix['brown-discus'] || {},
    quickFacts: [
      'Wild type discus species - most hardy variety',
      'Classic brown coloration with vertical bars',
      'Requires high temperature 28-30°C (82-86°F)',
      'Peaceful cichlid with excellent parenting',
      'Produces discus milk to feed young',
      'Prefers soft, acidic water conditions',
      'Forms strong pair bonds',
      'Most adaptable of all discus varieties',
      'Lives 10-15+ years with proper care',
      'Best beginner discus variety'
    ],
    detailedInfo: {
      description: 'The original wild discus species. Most hardy and adaptable, making it the best choice for beginners to discus keeping.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '5.5-6.5',
        hardness: '1-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'blue-discus',
    name: 'Blue Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon haraldi',
    compatibility: compatibilityMatrix['blue-discus'] || {},
    quickFacts: [
      'Beautiful blue wild discus species',
      'Stunning royal blue coloration',
      'Requires high temperature and soft water',
      'Peaceful temperament with excellent parenting',
      'Forms strong breeding pairs',
      'Slightly more delicate than brown discus',
      'Excellent parents producing discus milk',
      'Highly prized by discus enthusiasts',
      'Lives 10-15+ years with proper care',
      'Less common than brown discus'
    ],
    detailedInfo: {
      description: 'Wild blue discus with stunning royal blue coloration. Slightly more delicate than brown discus but equally rewarding.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '5.0-6.0',
        hardness: '1-6 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'green-discus',
    name: 'Green Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon tarzoo',
    compatibility: compatibilityMatrix['green-discus'] || {},
    quickFacts: [
      'Beautiful green wild discus species',
      'Stunning emerald green coloration',
      'Most recently discovered discus species',
      'Requires pristine water conditions',
      'Peaceful temperament with strong parenting',
      'Forms monogamous breeding pairs',
      'Excellent parents with discus milk production',
      'Highly sought after by collectors',
      'Lives 10-15+ years with proper care',
      'Rarest of the three wild species'
    ],
    detailedInfo: {
      description: 'The newest discovered wild discus species with beautiful green coloration. Highly prized and somewhat rare.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '5.0-6.0',
        hardness: '1-6 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'pigeon-blood-discus',
    name: 'Pigeon Blood Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['pigeon-blood-discus'] || {},
    quickFacts: [
      'Popular red-orange captive-bred variety',
      'Beautiful pigeon blood red coloration',
      'Hardy captive-bred discus strain',
      'Excellent beginner discus variety',
      'Strong breeding behavior and parenting',
      'More tolerant of water conditions',
      'Vibrant coloration intensifies with age',
      'Good community discus variety',
      'Lives 8-12+ years with proper care',
      'One of the most popular discus strains'
    ],
    detailedInfo: {
      description: 'One of the most popular captive-bred discus varieties with beautiful red-orange coloration. Hardy and beginner-friendly.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'checkerboard-discus',
    name: 'Checkerboard Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['checkerboard-discus'] || {},
    quickFacts: [
      'Distinctive checkerboard pattern variety',
      'Unique black and white pattern',
      'Hardy captive-bred discus strain',
      'Excellent pattern stability in breeding',
      'Good community discus variety',
      'Adaptable to various water conditions',
      'Strong parenting instincts',
      'Popular among discus collectors',
      'Lives 8-12+ years with proper care',
      'Distinctive appearance makes identification easy'
    ],
    detailedInfo: {
      description: 'Distinctive discus variety with checkerboard black and white patterns. Hardy and visually striking.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'turquoise-discus',
    name: 'Turquoise Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['turquoise-discus'] || {},
    quickFacts: [
      'Beautiful turquoise blue coloration',
      'Popular captive-bred variety',
      'Hardy and adaptable strain',
      'Excellent community discus fish',
      'Strong breeding behavior',
      'Stunning metallic blue-green sheen',
      'Good beginner to intermediate variety',
      'Consistent coloration across specimens',
      'Lives 8-12+ years with proper care',
      'One of the most recognizable discus types'
    ],
    detailedInfo: {
      description: 'Beautiful turquoise-colored discus variety with stunning metallic blue-green coloration. Hardy and popular.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'red-turquoise-discus',
    name: 'Red Turquoise Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['red-turquoise-discus'] || {},
    quickFacts: [
      'Stunning red and turquoise combination',
      'Premium captive-bred variety',
      'Beautiful color contrast and patterns',
      'Hardy and well-established strain',
      'Excellent breeding and parenting',
      'Vibrant colors intensify with maturity',
      'Popular show-quality discus',
      'Good community discus variety',
      'Lives 8-12+ years with proper care',
      'Higher price point due to coloration'
    ],
    detailedInfo: {
      description: 'Premium discus variety combining red and turquoise colors. Stunning appearance and excellent breeding qualities.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'cobalt-blue-discus',
    name: 'Cobalt Blue Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['cobalt-blue-discus'] || {},
    quickFacts: [
      'Intense cobalt blue coloration',
      'Premium captive-bred variety',
      'Stunning deep blue metallic sheen',
      'Hardy and well-established strain',
      'Excellent breeding qualities',
      'Consistent blue coloration',
      'Popular show and breeding variety',
      'Good community discus fish',
      'Lives 8-12+ years with proper care',
      'One of the most intense blue varieties'
    ],
    detailedInfo: {
      description: 'Premium discus variety with intense cobalt blue coloration. Stunning metallic appearance and excellent breeding qualities.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'powder-blue-discus',
    name: 'Powder Blue Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['powder-blue-discus'] || {},
    quickFacts: [
      'Soft powder blue coloration',
      'Elegant captive-bred variety',
      'Subtle and refined appearance',
      'Hardy and peaceful temperament',
      'Excellent breeding behavior',
      'Consistent pale blue coloration',
      'Popular for planted tank setups',
      'Good beginner to intermediate variety',
      'Lives 8-12+ years with proper care',
      'Calming and elegant appearance'
    ],
    detailedInfo: {
      description: 'Elegant discus variety with soft powder blue coloration. Refined appearance perfect for planted discus tanks.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'snow-white-discus',
    name: 'Snow White Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['snow-white-discus'] || {},
    quickFacts: [
      'Pure white albino discus variety',
      'Stunning leucistic appearance',
      'Hardy captive-bred strain',
      'Unique pure white coloration',
      'Excellent breeding qualities',
      'Red eyes typical of leucistic fish',
      'Popular specialty variety',
      'Good community discus fish',
      'Lives 8-12+ years with proper care',
      'Striking contrast in mixed discus tanks'
    ],
    detailedInfo: {
      description: 'Unique leucistic discus variety with pure white coloration and red eyes. Striking and hardy specialty variety.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'yellow-crystal-discus',
    name: 'Yellow Crystal Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['yellow-crystal-discus'] || {},
    quickFacts: [
      'Beautiful bright yellow coloration',
      'Premium captive-bred variety',
      'Stunning golden-yellow appearance',
      'Hardy and well-established strain',
      'Excellent breeding qualities',
      'Consistent yellow coloration',
      'Popular specialty variety',
      'Good community discus fish',
      'Lives 8-12+ years with proper care',
      'Adds bright color to discus community'
    ],
    detailedInfo: {
      description: 'Premium discus variety with beautiful bright yellow coloration. Adds stunning golden color to discus communities.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'red-spotted-green-discus',
    name: 'Red Spotted Green Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['red-spotted-green-discus'] || {},
    quickFacts: [
      'Wild-type pattern with red spots',
      'Beautiful green base with red markings',
      'Hardy captive-bred variety',
      'Excellent breeding and parenting',
      'Traditional discus appearance',
      'Good beginner to intermediate variety',
      'Strong natural coloration',
      'Popular classic variety',
      'Lives 8-12+ years with proper care',
      'Reminiscent of wild discus patterns'
    ],
    detailedInfo: {
      description: 'Classic discus variety with green base coloration and red spots. Traditional appearance reminiscent of wild discus.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'leopard-discus',
    name: 'Leopard Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['leopard-discus'] || {},
    quickFacts: [
      'Unique leopard-like spotted pattern',
      'Distinctive spotted appearance',
      'Hardy captive-bred variety',
      'Excellent breeding qualities',
      'Unique pattern genetics',
      'Popular specialty variety',
      'Good community discus fish',
      'Consistent pattern expression',
      'Lives 8-12+ years with proper care',
      'One of the most distinctive patterns'
    ],
    detailedInfo: {
      description: 'Unique discus variety with leopard-like spotted patterns. Distinctive appearance and excellent breeding qualities.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'marlboro-red-discus',
    name: 'Marlboro Red Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['marlboro-red-discus'] || {},
    quickFacts: [
      'Intense solid red coloration',
      'Premium captive-bred variety',
      'Stunning uniform red appearance',
      'Hardy and well-established strain',
      'Excellent breeding qualities',
      'Consistent red coloration',
      'Popular show-quality variety',
      'High-value breeding fish',
      'Lives 8-12+ years with proper care',
      'One of the most sought-after red varieties'
    ],
    detailedInfo: {
      description: 'Premium discus variety with intense solid red coloration. Highly sought-after show-quality variety.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12+ years'
    }
  },
  {
    id: 'german-red-discus',
    name: 'German Red Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus var.',
    compatibility: compatibilityMatrix['german-red-discus'] || {},
    quickFacts: [
      'Premium German-bred red variety',
      'Superior genetics and coloration',
      'Excellent breeding line quality',
      'Hardy and robust constitution',
      'Consistent red coloration across generations',
      'High-quality breeding stock',
      'Popular among serious breeders',
      'Premium price point variety',
      'Lives 10-15+ years with proper care',
      'Considered top-tier discus variety'
    ],
    detailedInfo: {
      description: 'Premium German-bred red discus variety with superior genetics and coloration. Top-tier quality for serious discus enthusiasts.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '3-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'featherfin-synodontis',
    name: 'Featherfin Synodontis',
    category: 'Catfish',
    scientificName: 'Synodontis eupterus',
    compatibility: compatibilityMatrix['synodontis-catfish'] || {},
    quickFacts: [
      'Large African catfish with feathery fins',
      'Grows to 20-25 cm (8-10 inches)',
      'Peaceful but may eat very small fish',
      'Active swimmer unlike many catfish',
      'Omnivorous diet with preference for meaty foods',
      'Beautiful extended fin rays that look feathery',
      'Lives 8-15 years with proper care',
      'Needs good water flow and oxygenation',
      'Social and can be kept in groups',
      'More active during evening hours'
    ],
    detailedInfo: {
      description: 'Large, beautiful African catfish with distinctive feathery fins. Active swimmer that needs spacious tanks.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-15 years'
    }
  },
  {
    id: 'lace-catfish',
    name: 'Lace Catfish',
    category: 'Catfish',
    scientificName: 'Synodontis nigrita',
    compatibility: compatibilityMatrix['synodontis-catfish'] || {},
    quickFacts: [
      'Beautiful African catfish with intricate patterns',
      'Medium-sized reaching 15-20 cm (6-8 inches)',
      'Peaceful and excellent for community tanks',
      'Active swimmer during day and night',
      'Omnivorous diet accepting variety of foods',
      'Distinctive lace-like pattern on body',
      'Lives 8-12 years with proper care',
      'Hardy and adaptable to water conditions',
      'Social behavior - can be kept in groups',
      'Less territorial than many African catfish'
    ],
    detailedInfo: {
      description: 'Medium-sized African catfish with beautiful lace-like patterns. Hardy and peaceful, excellent for community tanks.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '250+ litres (65+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'petricola-catfish',
    name: 'Petricola Catfish',
    category: 'Catfish',
    scientificName: 'Synodontis petricola',
    compatibility: compatibilityMatrix['synodontis-catfish'] || {},
    quickFacts: [
      'Small African catfish perfect for Tanganyikan setups',
      'Stays small at 10-13 cm (4-5 inches)',
      'Peaceful and excellent for cichlid tanks',
      'Active during day unlike many catfish',
      'Omnivorous diet with preference for small foods',
      'Beautiful spotted pattern with large eyes',
      'Lives 8-15 years with proper care',
      'Excellent for Lake Tanganyika biotopes',
      'Social - should be kept in groups of 3+',
      'Very peaceful even with small cichlids'
    ],
    detailedInfo: {
      description: 'Small, peaceful African catfish perfect for Tanganyikan cichlid tanks. Active during day and stays manageable size.',
      size: '10-13 cm (4-5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.5-8.5',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-15 years'
    }
  },
  {
    id: 'bumblebee-catfish',
    name: 'Bumblebee Catfish',
    category: 'Catfish',
    scientificName: 'Pseudomystus siamensis',
    compatibility: compatibilityMatrix['pictus-catfish'] || {},
    quickFacts: [
      'Small Asian catfish with bumblebee stripes',
      'Stays small at 8-10 cm (3-4 inches)',
      'Peaceful but may eat very small fish',
      'Nocturnal and secretive during day',
      'Carnivorous diet preferring meaty foods',
      'Yellow and black striped pattern',
      'Lives 5-8 years with proper care',
      'Needs caves and hiding spots',
      'Can be kept in small groups',
      'More active during evening feeding'
    ],
    detailedInfo: {
      description: 'Small Asian catfish with distinctive yellow and black stripes. Peaceful but needs hiding spots and appropriate sized tank mates.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'redtail-catfish',
    name: 'Red Tail Catfish',
    category: 'Catfish',
    scientificName: 'Phractocephalus hemioliopterus',
    compatibility: compatibilityMatrix['channel-catfish'] || {},
    quickFacts: [
      'Massive South American catfish - monster fish',
      'Grows enormous - 100+ cm (40+ inches)',
      'Predatory - will eat anything that fits in mouth',
      'Requires massive aquarium systems',
      'Omnivorous but heavily carnivorous',
      'Beautiful red tail fin and distinctive coloration',
      'Lives 15-20+ years in captivity',
      'Often outgrows home aquariums',
      'Extremely messy and produces tons of waste',
      'Only for serious monster fish keepers'
    ],
    detailedInfo: {
      description: 'Massive predatory catfish that grows enormous. Beautiful but only suitable for dedicated monster fish systems.',
      size: '100+ cm (40+ inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '2000+ litres (500+ gallons) minimum',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-20+ years'
    }
  },
  {
    id: 'tiger-shovelnose',
    name: 'Tiger Shovelnose Catfish',
    category: 'Catfish',
    scientificName: 'Pseudoplatystoma fasciatum',
    compatibility: compatibilityMatrix['channel-catfish'] || {},
    quickFacts: [
      'Large predatory catfish with tiger stripes',
      'Grows very large - 60+ cm (24+ inches)',
      'Highly predatory - eats fish up to half its size',
      'Requires enormous aquarium systems',
      'Carnivorous diet requiring large fish',
      'Beautiful black stripes on silver body',
      'Lives 15-20+ years in captivity',
      'Active swimmer needing massive space',
      'Produces enormous amounts of waste',
      'Only for experienced monster fish keepers'
    ],
    detailedInfo: {
      description: 'Large, beautiful predatory catfish with tiger stripes. Requires massive tanks and will eat most tank mates.',
      size: '60+ cm (24+ inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '1500+ litres (400+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-20+ years'
    }
  },
  {
    id: 'striped-raphael',
    name: 'Striped Raphael Catfish',
    category: 'Catfish',
    scientificName: 'Platydoras armatulus',
    compatibility: compatibilityMatrix['synodontis-catfish'] || {},
    quickFacts: [
      'Medium-sized South American talking catfish',
      'Reaches 15-20 cm (6-8 inches)',
      'Peaceful but may eat very small fish',
      'Makes audible croaking sounds when stressed',
      'Nocturnal and secretive during day',
      'Beautiful black and white striped pattern',
      'Lives 10-15 years with proper care',
      'Armored body with protective spines',
      'Very hardy and disease resistant',
      'Needs caves and hiding spots'
    ],
    detailedInfo: {
      description: 'Hardy armored catfish that makes audible sounds. Beautiful striped pattern and very peaceful with appropriate sized fish.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '250+ litres (65+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'spotted-raphael',
    name: 'Spotted Raphael Catfish',
    category: 'Catfish',
    scientificName: 'Agamyxis pectinifrons',
    compatibility: compatibilityMatrix['synodontis-catfish'] || {},
    quickFacts: [
      'Medium-sized spotted talking catfish',
      'Reaches 12-15 cm (5-6 inches)',
      'Peaceful and excellent for community tanks',
      'Makes audible sounds when handled',
      'Nocturnal but often active during feeding',
      'Beautiful spotted pattern on dark body',
      'Lives 8-12 years with proper care',
      'Armored body provides protection',
      'Very hardy and adaptable',
      'Prefers soft substrate for digging'
    ],
    detailedInfo: {
      description: 'Beautiful spotted armored catfish that makes talking sounds. Peaceful and hardy, excellent for community aquariums.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'asian-stone-catfish',
    name: 'Asian Stone Catfish',
    category: 'Catfish',
    scientificName: 'Hara jerdoni',
    compatibility: compatibilityMatrix['banjo-catfish'] || {},
    quickFacts: [
      'Tiny Asian catfish that looks like stone',
      'Very small at 3-4 cm (1.2-1.6 inches)',
      'Peaceful and perfect for nano tanks',
      'Incredibly well camouflaged',
      'Nocturnal and rarely seen during day',
      'Mottled brown pattern resembles debris',
      'Lives 3-5 years with good care',
      'Needs very small foods due to tiny size',
      'Excellent for species-only nano setups',
      'Completely motionless during day'
    ],
    detailedInfo: {
      description: 'Tiny, perfectly camouflaged catfish that looks exactly like a piece of stone or debris. Perfect for nano aquariums.',
      size: '3-4 cm (1.2-1.6 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'twig-catfish',
    name: 'Twig Catfish',
    category: 'Catfish',
    scientificName: 'Farlowella acus',
    compatibility: compatibilityMatrix['glass-catfish'] || {},
    quickFacts: [
      'Elongated catfish that resembles a twig',
      'Medium-sized reaching 15-20 cm (6-8 inches)',
      'Peaceful and excellent for planted tanks',
      'Herbivorous algae eater like plecos',
      'Requires excellent water quality',
      'Perfect camouflage among plants and driftwood',
      'Lives 5-8 years with proper care',
      'Sensitive to water parameter changes',
      'Needs high oxygen levels',
      'Excellent algae control for planted tanks'
    ],
    detailedInfo: {
      description: 'Elongated, twig-like catfish perfect for planted aquariums. Excellent algae eater but requires stable, high-quality water.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'guppies',
    name: 'Guppies',
    category: 'Livebearers',
    scientificName: 'Poecilia reticulata',
    compatibility: compatibilityMatrix['guppies'] || {},
    quickFacts: [
      'Colourful, peaceful livebearing fish',
      'Males more colourful with larger fins than females',
      'Very prolific breeders',
      'Hardy and adaptable to various conditions',
      'Omnivorous with preference for small foods',
      'Active swimmers that occupy all tank levels',
      'Live 2-3 years typically',
      'Perfect beginner fish',
      'Do well in groups of 6 or more',
      'Many varieties and colour morphs available'
    ],
    detailedInfo: {
      description: 'Vibrant, easy-to-care-for fish that bring colour and activity to community aquariums while being perfect for beginners.',
      size: '3-6 cm (1.2-2.4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.8-7.8',
        hardness: '8-12 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'tetras',
    name: 'Tetras',
    category: 'Characins',
    scientificName: 'Various Tetra species',
    compatibility: compatibilityMatrix['tetras'] || {},
    quickFacts: [
      'Small, colourful schooling fish',
      'Need groups of 6+ to feel secure',
      'Generally peaceful community fish',
      'Range from 2.5-7.5 cm (1-3 inches)',
      'Omnivorous with preference for small foods',
      'Active swimmers that create beautiful schools',
      'Live 3-8 years depending on species',
      'Many varieties available',
      'Prefer soft, slightly acidic water',
      'Add movement and colour to tanks'
    ],
    detailedInfo: {
      description: 'Popular schooling fish that create stunning displays when kept in groups, perfect for community aquariums.',
      size: '2.5-7.5 cm (1-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '23-27°C (73-81°F)',
        ph: '6.0-7.0',
        hardness: '1-10 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-8 years'
    }
  },
  {
    id: 'plecos',
    name: 'Pleco Catfish',
    category: 'Catfish',
    scientificName: 'Various Hypostomus, Pterygoplichthys species',
    compatibility: compatibilityMatrix['plecos'] || {},
    quickFacts: [
      'Large algae-eating catfish',
      'Nocturnal and prefer hiding during day',
      'Can grow very large (15-45 cm / 6-18 inches)',
      'Need driftwood in diet for proper digestion',
      'Territorial towards other bottom dwellers',
      'Create significant bioload',
      'Live 10-15+ years',
      'Need large tanks when adult',
      'Important algae control in aquariums',
      'Many smaller species available'
    ],
    detailedInfo: {
      description: 'Large, hardy catfish excellent for algae control, though they require spacious tanks and proper care.',
      size: '15-45 cm (6-18 inches)',
      temperament: 'Peaceful but territorial',
      diet: 'Herbivorous/Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '23-28°C (74-82°F)',
        ph: '6.5-7.5',
        hardness: '6-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15+ years'
    }
  },
  {
    id: 'betta-splendens-veiltail',
    name: 'Veiltail Betta',
    category: 'Anabantoids',
    scientificName: 'Betta splendens',
    compatibility: compatibilityMatrix['betta-splendens-veiltail'] || {},
    quickFacts: [
      'Most common Betta variety with long, flowing tail',
      'Males are highly territorial and fight with each other',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 26-30°C (78-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-4 years typically',
      'Need gentle filtration due to long fins',
      'Males must be kept alone or with careful tankmates',
      'Very interactive and recognises owners'
    ],
    detailedInfo: {
      description: 'The classic Betta with long, flowing tail fins that drape like a veil. Males are territorial and should not be housed together.',
      size: '6 cm (2.5 inches)',
      temperament: 'Territorial/Aggressive to other bettas',
      diet: 'Carnivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '26-28°C (78-82°F)',
        ph: '6.5-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'betta-splendens-crowntail',
    name: 'Crowntail Betta',
    category: 'Anabantoids',
    scientificName: 'Betta splendens',
    compatibility: compatibilityMatrix['betta-splendens-crowntail'] || {},
    quickFacts: [
      'Distinctive spiky fin rays extending beyond fin membrane',
      'Males are highly territorial and fight with each other',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 26-30°C (78-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-4 years typically',
      'Less prone to fin damage than other long-finned varieties',
      'Males must be kept alone or with careful tankmates',
      'Very interactive and recognises owners'
    ],
    detailedInfo: {
      description: 'Recognized by the spiky crown-like extensions of the fin rays that extend beyond the fin webbing, creating a dramatic spiked appearance.',
      size: '6 cm (2.5 inches)',
      temperament: 'Territorial/Aggressive to other bettas',
      diet: 'Carnivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '26-28°C (78-82°F)',
        ph: '6.5-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'betta-splendens-halfmoon',
    name: 'Halfmoon Betta',
    category: 'Anabantoids',
    scientificName: 'Betta splendens',
    compatibility: compatibilityMatrix['betta-splendens-halfmoon'] || {},
    quickFacts: [
      'Tail spreads to 180 degrees forming perfect half-circle',
      'Males are highly territorial and fight with each other',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 26-30°C (78-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-4 years typically',
      'Requires very gentle filtration due to large fins',
      'Males must be kept alone or with careful tankmates',
      'Very interactive and recognises owners'
    ],
    detailedInfo: {
      description: 'Prized for their perfectly symmetrical tail that spreads 180 degrees when fully flared, forming a perfect half-moon shape.',
      size: '6 cm (2.5 inches)',
      temperament: 'Territorial/Aggressive to other bettas',
      diet: 'Carnivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '26-28°C (78-82°F)',
        ph: '6.5-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'betta-splendens-plakat',
    name: 'Plakat Betta',
    category: 'Anabantoids',
    scientificName: 'Betta splendens',
    compatibility: compatibilityMatrix['betta-splendens-plakat'] || {},
    quickFacts: [
      'Short-finned variety closer to wild Betta form',
      'Males are highly territorial and fight with each other',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 26-30°C (78-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-4 years typically',
      'More active swimmers due to shorter fins',
      'Males must be kept alone or with careful tankmates',
      'Very interactive and recognises owners'
    ],
    detailedInfo: {
      description: 'Short-finned Betta variety that resembles the wild form. More active swimmers and less prone to fin damage than long-finned varieties.',
      size: '6 cm (2.5 inches)',
      temperament: 'Territorial/Aggressive to other bettas',
      diet: 'Carnivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '26-28°C (78-82°F)',
        ph: '6.5-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'betta-splendens-doubletail',
    name: 'Double Tail Betta',
    category: 'Anabantoids',
    scientificName: 'Betta splendens',
    compatibility: compatibilityMatrix['betta-splendens-doubletail'] || {},
    quickFacts: [
      'Unique split caudal fin creating two distinct tails',
      'Males are highly territorial and fight with each other',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 26-30°C (78-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-4 years typically',
      'Often have wider dorsal fins to match tail symmetry',
      'Males must be kept alone or with careful tankmates',
      'Very interactive and recognises owners'
    ],
    detailedInfo: {
      description: 'Distinctive Betta variety with a split caudal fin that creates the appearance of two separate tails, often accompanied by a wider dorsal fin.',
      size: '6 cm (2.5 inches)',
      temperament: 'Territorial/Aggressive to other bettas',
      diet: 'Carnivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '26-28°C (78-82°F)',
        ph: '6.5-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'betta-imbellis',
    name: 'Peaceful Betta',
    category: 'Anabantoids',
    scientificName: 'Betta imbellis',
    compatibility: compatibilityMatrix['betta-imbellis'] || {},
    quickFacts: [
      'Much more peaceful than Betta splendens',
      'Can be kept in small groups with adequate space',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 24-28°C (75-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-3 years typically',
      'Natural coloration with blue-green iridescence',
      'More compatible with community tanks',
      'Less commonly available than B. splendens'
    ],
    detailedInfo: {
      description: 'A peaceful Betta species that can be kept in community tanks and even small groups. Much less aggressive than the common Betta splendens.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'betta-mahachaiensis',
    name: 'Mahachai Betta',
    category: 'Anabantoids',
    scientificName: 'Betta mahachaiensis',
    compatibility: compatibilityMatrix['betta-mahachaiensis'] || {},
    quickFacts: [
      'Wild Betta species from Thailand',
      'More peaceful than B. splendens',
      'Can breathe air from surface with labyrinth organ',
      'Prefers slightly brackish water',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-3 years typically',
      'Distinctive black body with iridescent scales',
      'Better suited for species tanks',
      'Requires more specific water conditions'
    ],
    detailedInfo: {
      description: 'A wild Betta species from the Mahachai region of Thailand. Distinguished by its dark coloration and tolerance for slightly brackish water.',
      size: '5.5 cm (2.2 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Carnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'betta-smaragdina',
    name: 'Emerald Betta',
    category: 'Anabantoids',
    scientificName: 'Betta smaragdina',
    compatibility: compatibilityMatrix['betta-smaragdina'] || {},
    quickFacts: [
      'Wild Betta species with emerald green coloration',
      'More peaceful than B. splendens',
      'Can breathe air from surface with labyrinth organ',
      'Prefer warm water 24-28°C (75-82°F)',
      'Bubble nest builders',
      'Carnivorous with preference for live/frozen foods',
      'Live 2-3 years typically',
      'Beautiful iridescent green and blue coloration',
      'Can be kept in community tanks with care',
      'Less commonly available than domestic varieties'
    ],
    detailedInfo: {
      description: 'A beautiful wild Betta species known for its emerald green and blue iridescent coloration. More peaceful than the common Betta splendens.',
      size: '6 cm (2.4 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Carnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'betta-albimarginata',
    name: 'Strawberry Betta',
    category: 'Anabantoids',
    scientificName: 'Betta albimarginata',
    compatibility: compatibilityMatrix['betta-albimarginata'] || {},
    quickFacts: [
      'Small, peaceful wild Betta species',
      'Can be kept in groups of 6 or more',
      'Can breathe air from surface with labyrinth organ',
      'Prefer soft, acidic water',
      'Mouthbrooder - males carry eggs and fry',
      'Carnivorous with preference for small live foods',
      'Live 2-3 years typically',
      'Red and white coloration resembling strawberries',
      'Excellent for community tanks',
      'Requires well-planted tanks with hiding spots'
    ],
    detailedInfo: {
      description: 'A small, peaceful Betta species that can be kept in groups. Named for its red and white coloration. Males are mouthbrooders rather than bubble nest builders.',
      size: '4 cm (1.6 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '76+ litres (20+ gallons) for groups',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '5.0-6.5',
        hardness: '1-5 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'betta-channoides',
    name: 'Snakehead Betta',
    category: 'Anabantoids',
    scientificName: 'Betta channoides',
    compatibility: compatibilityMatrix['betta-channoides'] || {},
    quickFacts: [
      'Small, peaceful wild Betta species',
      'Can be kept in groups with adequate space',
      'Can breathe air from surface with labyrinth organ',
      'Prefer soft, acidic water',
      'Mouthbrooder - males carry eggs and fry',
      'Carnivorous with preference for small live foods',
      'Live 2-3 years typically',
      'Elongated body shape resembling small snakehead',
      'Excellent for community tanks',
      'Requires well-planted tanks with hiding spots'
    ],
    detailedInfo: {
      description: 'A peaceful wild Betta with an elongated body shape resembling a small snakehead. Can be kept in groups and is excellent for community tanks.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '76+ litres (20+ gallons) for groups',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '5.0-6.5',
        hardness: '1-5 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'betta-falx',
    name: 'Falx Betta',
    category: 'Anabantoids',
    scientificName: 'Betta falx',
    compatibility: compatibilityMatrix['betta-falx'] || {},
    quickFacts: [
      'Peaceful wild Betta species from Indonesia',
      'Can be kept in groups with adequate space',
      'Can breathe air from surface with labyrinth organ',
      'Prefer soft, acidic water',
      'Mouthbrooder - males carry eggs and fry',
      'Carnivorous with preference for small live foods',
      'Live 2-3 years typically',
      'Distinctive curved tail shape resembling a sickle',
      'Excellent for community tanks',
      'Requires well-planted tanks with hiding spots'
    ],
    detailedInfo: {
      description: 'A peaceful wild Betta species from Indonesia, named for its distinctive curved tail shape that resembles a sickle (falx). Great for community tanks.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '76+ litres (20+ gallons) for groups',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '5.0-6.5',
        hardness: '1-5 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'betta-pugnax',
    name: 'Forest Betta',
    category: 'Anabantoids',
    scientificName: 'Betta pugnax',
    compatibility: compatibilityMatrix['betta-pugnax'] || {},
    quickFacts: [
      'Medium-sized wild Betta species',
      'More peaceful than B. splendens when mature',
      'Can breathe air from surface with labyrinth organ',
      'Prefer soft, acidic water',
      'Mouthbrooder - males carry eggs and fry',
      'Carnivorous with preference for live foods',
      'Live 3-4 years typically',
      'Beautiful red and blue coloration when mature',
      'Suitable for community tanks with peaceful fish',
      'Requires well-planted tanks with hiding spots'
    ],
    detailedInfo: {
      description: 'A medium-sized wild Betta species that develops beautiful red and blue coloration. More peaceful than B. splendens and suitable for community tanks.',
      size: '8 cm (3.2 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Carnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '5.5-6.5',
        hardness: '2-8 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-4 years'
    }
  },
  {
    id: 'betta-picta',
    name: 'Spotted Betta',
    category: 'Anabantoids',
    scientificName: 'Betta picta',
    compatibility: compatibilityMatrix['betta-picta'] || {},
    quickFacts: [
      'Small, peaceful wild Betta species',
      'Can be kept in groups with adequate space',
      'Can breathe air from surface with labyrinth organ',
      'Prefer soft, acidic water',
      'Mouthbrooder - males carry eggs and fry',
      'Carnivorous with preference for small live foods',
      'Live 2-3 years typically',
      'Distinctive spotted pattern on body and fins',
      'Excellent for community tanks',
      'Requires well-planted tanks with hiding spots'
    ],
    detailedInfo: {
      description: 'A small, peaceful wild Betta species characterized by its distinctive spotted pattern. Can be kept in groups and is excellent for community aquariums.',
      size: '4.5 cm (1.8 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '76+ litres (20+ gallons) for groups',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '5.0-6.5',
        hardness: '1-5 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'barbs',
    name: 'Barbs',
    category: 'Cyprinids',
    scientificName: 'Various Barbus, Puntius species',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Active schooling fish that need groups of 6+',
      'Generally peaceful but can be nippy',
      'Hardy and adaptable to various conditions',
      'Range from 5-15 cm (2-6 inches) depending on species',
      'Omnivorous with hearty appetites',
      'Bright colours, especially during breeding',
      'Live 4-7 years typically',
      'Need plenty of swimming space',
      'Good beginner fish when kept properly',
      'Some species can be fin nippers'
    ],
    detailedInfo: {
      description: 'Active schooling fish that add movement and colour to community aquariums, though some species can be nippy.',
      size: '5-15 cm (2-6 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-7 years'
    }
  },
  {
    id: 'discus',
    name: 'Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon species',
    compatibility: compatibilityMatrix['discus'] || {},
    quickFacts: [
      'King of the aquarium - stunning disc-shaped cichlids',
      'Require very warm water 28-30°C (82-86°F)',
      'Need excellent water quality and frequent changes',
      'Peaceful but can be territorial when breeding',
      'Prefer soft, acidic water conditions',
      'Beautiful patterns and intense colours',
      'Live 10-15 years with proper care',
      'Need tall tanks due to their shape',
      'Somewhat challenging for beginners',
      'Form strong pair bonds when breeding'
    ],
    detailedInfo: {
      description: 'Magnificent, disc-shaped cichlids considered the king of freshwater aquariums, requiring pristine water conditions.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '28-30°C (82-86°F)',
        ph: '6.0-7.0',
        hardness: '1-10 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'danios-minnows',
    name: 'Danios & Minnows',
    category: 'Cyprinids',
    scientificName: 'Various Danio, Devario species',
    compatibility: compatibilityMatrix['danios-minnows'] || {},
    quickFacts: [
      'Very active, fast-swimming schooling fish',
      'Hardy and perfect for beginners',
      'Need groups of 6+ to feel secure',
      'Constantly moving and very energetic',
      'Omnivorous and easy to feed',
      'Attractive stripes and patterns',
      'Live 3-5 years typically',
      'Prefer cooler water than many tropicals',
      'Excellent for cycling new tanks',
      'Some species can jump'
    ],
    detailedInfo: {
      description: 'Extremely hardy, active schooling fish perfect for beginners and excellent for adding movement to community tanks.',
      size: '3-10 cm (1-4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '18-24°C (64-75°F)',
        ph: '6.0-8.0',
        hardness: '5-19 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'gouramis',
    name: 'Gouramis',
    category: 'Anabantoids',
    scientificName: 'Various Trichogaster, Colisa species',
    compatibility: compatibilityMatrix['gouramis'] || {},
    quickFacts: [
      'Labyrinth fish that can breathe air',
      'Generally peaceful but males can be territorial',
      'Beautiful colours and flowing fins',
      'Range from 5-25 cm (2-10 inches)',
      'Omnivorous with preference for surface feeding',
      'Some species build bubble nests',
      'Live 4-8 years depending on species',
      'Prefer planted tanks with gentle flow',
      'Some species are quite hardy',
      'Males more colourful than females'
    ],
    detailedInfo: {
      description: 'Elegant labyrinth fish with beautiful colours and flowing fins, generally peaceful and suitable for community tanks.',
      size: '5-25 cm (2-10 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-8.0',
        hardness: '4-18 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-8 years'
    }
  },
  {
    id: 'rainbowfish',
    name: 'Rainbowfish',
    category: 'Rainbowfish',
    scientificName: 'Various Melanotaenia, Pseudomugil species',
    compatibility: compatibilityMatrix['rainbowfish'] || {},
    quickFacts: [
      'Brilliantly coloured, active schooling fish',
      'Males more colourful with higher fins',
      'Need groups of 6+ to show best colours',
      'Very active swimmers needing space',
      'Omnivorous and easy to feed',
      'Peaceful and excellent community fish',
      'Live 5-8 years typically',
      'Prefer slightly alkaline water',
      'Some species from Australia/New Guinea',
      'Beautiful when mature and well-fed'
    ],
    detailedInfo: {
      description: 'Spectacularly coloured, active fish that create stunning displays in groups and are excellent for larger community tanks.',
      size: '7-15 cm (3-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '7.0-8.5',
        hardness: '8-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'mollies',
    name: 'Mollies',
    category: 'Livebearers',
    scientificName: 'Poecilia species',
    compatibility: compatibilityMatrix['mollies'] || {},
    quickFacts: [
      'Hardy livebearing fish excellent for beginners',
      'Can adapt to freshwater and brackish conditions',
      'Males smaller and more colourful than females',
      'Very prolific breeders',
      'Omnivorous but prefer vegetable matter',
      'Active swimmers at all tank levels',
      'Live 3-5 years typically',
      'Many colour varieties available',
      'Peaceful and social fish',
      'Prefer slightly alkaline water'
    ],
    detailedInfo: {
      description: 'Hardy, adaptable livebearers that are excellent for beginners and can tolerate a wide range of water conditions.',
      size: '6-12 cm (2.5-5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '7.0-8.5',
        hardness: '15-30 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'platies',
    name: 'Platies',
    category: 'Livebearers',
    scientificName: 'Xiphophorus maculatus',
    compatibility: compatibilityMatrix['platies'] || {},
    quickFacts: [
      'Colourful, peaceful livebearing fish',
      'Very hardy and perfect for beginners',
      'Come in many colour varieties',
      'Males smaller with more pointed fins',
      'Omnivorous and easy to feed',
      'Active at all tank levels',
      'Live 2-4 years typically',
      'Very prolific breeders',
      'Excellent community fish',
      'Prefer slightly alkaline water'
    ],
    detailedInfo: {
      description: 'Vibrant, easy-care livebearers that are perfect for beginners and bring constant colour to community aquariums.',
      size: '4-7 cm (1.5-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '7.0-8.2',
        hardness: '10-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'swordtails',
    name: 'Swordtails',
    category: 'Livebearers',
    scientificName: 'Xiphophorus hellerii',
    compatibility: compatibilityMatrix['swordtails'] || {},
    quickFacts: [
      'Males have distinctive sword-like tail extension',
      'Hardy and adaptable livebearing fish',
      'Come in many colour varieties',
      'Can be somewhat aggressive, especially males',
      'Omnivorous with hearty appetites',
      'Active swimmers needing space',
      'Live 3-5 years typically',
      'Very prolific breeders',
      'Can jump, need covered tanks',
      'Prefer slightly alkaline water'
    ],
    detailedInfo: {
      description: 'Attractive livebearers with males displaying characteristic sword-like tail extensions, though they can be more aggressive than other livebearers.',
      size: '8-12 cm (3-5 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '7.0-8.3',
        hardness: '12-30 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'loaches',
    name: 'Loaches',
    category: 'Loaches',
    scientificName: 'Various Botia, Chromobotia species',
    compatibility: compatibilityMatrix['loaches'] || {},
    quickFacts: [
      'Bottom-dwelling fish with playful personalities',
      'Most species are social and need groups',
      'Can make clicking sounds when happy',
      'Range from small to quite large species',
      'Omnivorous with preference for sinking foods',
      'Many have beautiful patterns and colours',
      'Live 10-20+ years depending on species',
      'Some species can be quite large',
      'Generally peaceful but can be boisterous',
      'Many are nocturnal or crepuscular'
    ],
    detailedInfo: {
      description: 'Entertaining bottom-dwellers with unique personalities, ranging from small species to large, long-lived aquarium centrepieces.',
      size: '5-30 cm (2-12 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-20+ years'
    }
  },
  {
    id: 'rasboras',
    name: 'Rasboras',
    category: 'Cyprinids',
    scientificName: 'Various Rasbora, Trigonostigma species',
    compatibility: compatibilityMatrix['rasboras'] || {},
    quickFacts: [
      'Small, peaceful schooling fish',
      'Need groups of 8+ to show natural behaviour',
      'Generally very peaceful and non-aggressive',
      'Many species have beautiful colours',
      'Omnivorous but prefer small foods',
      'Active swimmers creating lovely schools',
      'Live 3-8 years depending on species',
      'Perfect for planted community tanks',
      'Most prefer soft, slightly acidic water',
      'Many nano species available'
    ],
    detailedInfo: {
      description: 'Small, peaceful schooling fish that create beautiful displays in planted tanks and are excellent for community aquariums.',
      size: '2-7 cm (0.8-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-8 years'
    }
  },
  {
    id: 'killifish',
    name: 'Killifish',
    category: 'Killifish',
    scientificName: 'Various Aphyosemion, Nothobranchius species',
    compatibility: compatibilityMatrix['killifish'] || {},
    quickFacts: [
      'Small, often brilliantly coloured fish',
      'Some are annual species with short lifespans',
      'Males much more colourful than females',
      'Many prefer soft, acidic water conditions',
      'Carnivorous with preference for live foods',
      'Can be territorial, especially during breeding',
      'Lifespan varies greatly by species',
      'Many are excellent jumpers',
      'Some species are quite hardy',
      'Popular with specialist enthusiasts'
    ],
    detailedInfo: {
      description: 'Small, often spectacularly coloured fish that are popular with enthusiasts, though many require specific care conditions.',
      size: '3-10 cm (1-4 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Carnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '1-5 years'
    }
  },
  {
    id: 'fancy-goldfish',
    name: 'Fancy Goldfish',
    category: 'Goldfish',
    scientificName: 'Carassius auratus',
    compatibility: compatibilityMatrix['fancy-goldfish'] || {},
    quickFacts: [
      'Cold-water fish preferring cooler temperatures',
      'Many varieties with different body shapes',
      'Can live 10-30+ years with proper care',
      'Produce significant waste requiring good filtration',
      'Omnivorous with preference for sinking foods',
      'Generally peaceful but can eat small fish',
      'Need larger tanks than commonly believed',
      'Some varieties have delicate fins or eyes',
      'Social fish that do well in groups',
      'Hardy but need stable water conditions'
    ],
    detailedInfo: {
      description: 'Beautiful cold-water fish available in many varieties, requiring cooler temperatures and excellent filtration due to their waste production.',
      size: '15-25 cm (6-10 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '18-22°C (64-72°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-30+ years'
    }
  },
  {
    id: 'sharks',
    name: 'Freshwater Sharks',
    category: 'Sharks',
    scientificName: 'Various Epalzeorhynchos, Labeo species',
    compatibility: compatibilityMatrix['sharks'] || {},
    quickFacts: [
      'Not true sharks but shark-like cyprinids',
      'Generally territorial and semi-aggressive',
      'Most species grow quite large',
      'Active swimmers needing plenty of space',
      'Omnivorous with algae-eating tendencies',
      'Many species are jumpers',
      'Live 5-10 years typically',
      'Some species change colour with age',
      'Can be aggressive to similar-looking fish',
      'Popular species include Rainbow and Red-tail sharks'
    ],
    detailedInfo: {
      description: 'Shark-like cyprinids that are active swimmers requiring large tanks, though they can be territorial with similar species.',
      size: '10-60 cm (4-24 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-10 years'
    }
  },
  {
    id: 'larger-catfish',
    name: 'Larger Catfish',
    category: 'Catfish',
    scientificName: 'Various Pimelodus, Pseudoplatystoma species',
    compatibility: compatibilityMatrix['larger-catfish'] || {},
    quickFacts: [
      'Large predatory catfish species',
      'Will eat any fish that fits in their mouth',
      'Mostly nocturnal and prefer hiding during day',
      'Can grow very large, some over 60 cm (24 inches)',
      'Carnivorous with huge appetites',
      'Create significant bioload',
      'Live 15-20+ years',
      'Need very large tanks when adult',
      'Generally peaceful with fish too large to eat',
      'Include species like Pictus and Shovelnose cats'
    ],
    detailedInfo: {
      description: 'Large, impressive catfish that make stunning centrepiece fish but require very large tanks and careful tankmate selection.',
      size: '15-60+ cm (6-24+ inches)',
      temperament: 'Peaceful but predatory',
      diet: 'Carnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '2-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-20+ years'
    }
  },
  {
    id: 'suckermouth-catfish',
    name: 'Suckermouth Catfish',
    category: 'Catfish',
    scientificName: 'Various smaller Ancistrus, Otocinclus species',
    compatibility: compatibilityMatrix['suckermouth-catfish'] || {},
    quickFacts: [
      'Smaller algae-eating catfish',
      'Excellent for algae control in community tanks',
      'Generally peaceful and non-aggressive',
      'Most species stay relatively small',
      'Herbivorous/omnivorous diet',
      'Many species breed readily in aquariums',
      'Live 5-10 years typically',
      'Need some vegetable matter in diet',
      'Active during day unlike larger plecos',
      'Include Bristlenose plecos and Otocinclus'
    ],
    detailedInfo: {
      description: 'Smaller, peaceful catfish excellent for algae control and perfect for community aquariums without the space requirements of larger plecos.',
      size: '3-15 cm (1-6 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous/Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '6-10 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-10 years'
    }
  },
  {
    id: 'hatchets',
    name: 'Hatchetfish',
    category: 'Characins',
    scientificName: 'Various Carnegiella, Thoracocharax species',
    compatibility: compatibilityMatrix['hatchets'] || {},
    quickFacts: [
      'Unique surface-dwelling fish with distinctive shape',
      'Excellent jumpers - need tight-fitting lids',
      'Peaceful schooling fish needing groups of 6+',
      'Feed primarily at water surface',
      'Insectivorous in nature, prefer floating foods',
      'Very sensitive to water quality changes',
      'Live 3-5 years typically',
      'Occupy surface waters other fish ignore',
      'Generally peaceful with all tankmates',
      'Several species available in aquarium trade'
    ],
    detailedInfo: {
      description: 'Unique surface-dwelling fish with distinctive body shape, excellent for occupying the upper levels of community aquariums.',
      size: '4-9 cm (1.5-3.5 inches)',
      temperament: 'Peaceful',
      diet: 'Insectivorous/Carnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '23-28°C (73-82°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'misc-african-cichlids',
    name: 'Other African Cichlids',
    category: 'Cichlids',
    scientificName: 'Various Haplochromis, Astatotilapia species',
    compatibility: compatibilityMatrix['misc-african-cichlids'] || {},
    quickFacts: [
      'Varied temperaments from peaceful to aggressive',
      'Diverse water parameter requirements',
      'Include Victorian and other lake species',
      'Range from 7.5-30 cm (3-12 inches) in size',
      'Mostly omnivorous feeders',
      'Beautiful metallic colours',
      'Live 6-10 years typically',
      'Need species-specific research',
      'Some suitable for community tanks',
      'Interesting parental care behaviours'
    ],
    detailedInfo: {
      description: 'A diverse group including cichlids from Lake Victoria and smaller African water bodies, each with unique requirements.',
      size: '7.5-30 cm (3-12 inches)',
      temperament: 'Varies',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-27°C (72-80°F)',
        ph: '7.0-8.5',
        hardness: '8-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '6-10 years'
    }
  },
  {
    id: 'new-world-cichlids',
    name: 'New World Cichlids',
    category: 'Cichlids',
    scientificName: 'Various Central/South American species',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Include popular species like Oscars, Jack Dempseys',
      'Generally prefer softer, slightly acidic water',
      'Range from peaceful to highly aggressive',
      'Many grow quite large 15-35 cm (6-14 inches)',
      'Excellent parents with elaborate care',
      'Beautiful patterns and earth tones',
      'Live 8-15 years in captivity',
      'Need hiding places and territories',
      'Some suitable for community setups',
      'Very intelligent and interactive'
    ],
    detailedInfo: {
      description: 'Central and South American cichlids known for their size, intelligence, and strong parental instincts.',
      size: '10-35 cm (4-14 inches)',
      temperament: 'Semi-aggressive to Aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '23-27°C (74-80°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-15 years'
    }
  },
  {
    id: 'misc-fish',
    name: 'Miscellaneous Fish',
    category: 'Various',
    scientificName: 'Various species',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Diverse group of less common aquarium fish',
      'Includes elephant nose, knife fish, and others',
      'Wide range of temperaments and requirements',
      'Many are speciality fish for experienced keepers',
      'Varied diets from herbivorous to predatory',
      'Some are nocturnal or have special needs',
      'Lifespans vary greatly by species',
      'Often require species-specific research',
      'Many are not suitable for community tanks',
      'Can be very rewarding for dedicated aquarists'
    ],
    detailedInfo: {
      description: 'A diverse group of speciality fish that often require specific care and are generally suited for experienced aquarists.',
      size: '5-50 cm (2-20 inches)',
      temperament: 'Varies',
      diet: 'Varies',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '3-15 years'
    }
  },
  {
    id: 'invertebrates',
    name: 'Freshwater Invertebrates',
    category: 'Invertebrates',
    scientificName: 'Various shrimp, snail, and crab species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Include shrimp, snails, and freshwater crabs',
      'Generally peaceful and beneficial',
      'Excellent algae and detritus cleaners',
      'Many species are quite small',
      'Some are sensitive to water parameters',
      'Can be eaten by larger fish',
      'Lifespans vary from 1-10+ years',
      'Many breed readily in aquariums',
      'Important for aquarium ecosystem balance',
      'Popular species include Cherry shrimp and Nerite snails'
    ],
    detailedInfo: {
      description: 'Beneficial invertebrates that help maintain aquarium cleanliness and add interesting diversity to freshwater tanks.',
      size: '0.5-10 cm (0.2-4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.5-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-10+ years'
    }
  },
  {
    id: 'brackish-fish',
    name: 'Brackish Fish',
    category: 'Brackish',
    scientificName: 'Various brackish water species',
    compatibility: compatibilityMatrix['brackish-fish'] || {},
    quickFacts: [
      'Fish from brackish water environments',
      'Require salt added to freshwater',
      'Include puffers, monos, and scats',
      'Generally more challenging to keep',
      'Need specific salinity levels',
      'Many are aggressive or have special diets',
      'Live 5-15 years depending on species',
      'Require specialised setups',
      'Not suitable for standard community tanks',
      'Rewarding for dedicated aquarists'
    ],
    detailedInfo: {
      description: 'Speciality fish from brackish environments requiring specific salinity levels and generally not suitable for standard freshwater community tanks.',
      size: '5-30 cm (2-12 inches)',
      temperament: 'Varies',
      diet: 'Varies',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.5-8.5',
        hardness: '15-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '5-15 years'
    }
  },
  {
    id: 'pond-fish',
    name: 'Pond Fish',
    category: 'Pond Fish',
    scientificName: 'Various cold-water species',
    compatibility: compatibilityMatrix['pond-fish'] || {},
    quickFacts: [
      'Cold-water fish suitable for outdoor ponds',
      'Include koi, common goldfish, and others',
      'Hardy and can survive temperature fluctuations',
      'Many grow very large',
      'Generally peaceful but may eat smaller fish',
      'Can live many decades with proper care',
      'Need large volumes of water',
      'Some are suitable for large indoor tanks',
      'Important to consider adult size',
      'Often very long-lived'
    ],
    detailedInfo: {
      description: 'Hardy cold-water fish designed for outdoor ponds but some species can be kept in large indoor aquariums.',
      size: '15-60+ cm (6-24+ inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '4-24°C (39-75°F)',
        ph: '6.5-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '20-50+ years'
    }
  },
  {
    id: 'freshwater-plants',
    name: 'Freshwater Plants',
    category: 'Plants',
    scientificName: 'Various aquatic plant species',
    compatibility: compatibilityMatrix['freshwater-plants'] || {},
    quickFacts: [
      'Living plants that benefit aquarium ecosystems',
      'Provide oxygen and absorb waste compounds',
      'Offer hiding places and natural decoration',
      'Range from easy to very demanding species',
      'Some fish will eat or uproot plants',
      'Can help control algae growth',
      'Propagate through various methods',
      'Require appropriate lighting',
      'May need CO2 supplementation',
      'Create natural, beautiful aquascapes'
    ],
    detailedInfo: {
      description: 'Living aquatic plants that provide numerous benefits including oxygenation, waste absorption, and natural beauty.',
      size: '2-50+ cm (1-20+ inches)',
      temperament: 'Beneficial',
      diet: 'Photosynthetic',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '18-30°C (64-86°F)',
        ph: '6.0-8.0',
        hardness: '2-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: 'Ongoing with propagation'
    }
  },
  {
    id: 'freshwater-shrimp',
    name: 'Freshwater Shrimp',
    category: 'Invertebrates',
    scientificName: 'Various Neocaridina, Caridina species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Include Cherry, Amano, and Crystal shrimp varieties',
      'Excellent algae and biofilm cleaners',
      'Very peaceful and non-aggressive',
      'Can be eaten by larger fish',
      'Some species sensitive to water parameters',
      'Many breed readily in aquariums',
      'Live 1-3 years typically',
      'Need stable water conditions',
      'Add interesting activity to tanks',
      'Popular varieties include Red Cherry and Blue Velvet'
    ],
    detailedInfo: {
      description: 'Small, active invertebrates that provide excellent cleaning services while adding unique movement and colour to freshwater aquariums.',
      size: '1-5 cm (0.4-2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '18-26°C (64-79°F)',
        ph: '6.0-8.0',
        hardness: '4-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-3 years'
    }
  },
  {
    id: 'freshwater-snails',
    name: 'Freshwater Snails',
    category: 'Invertebrates',
    scientificName: 'Various Nerite, Mystery, Ramshorn species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Include Nerite, Mystery, and Apple snail varieties',
      'Excellent algae eaters and tank cleaners',
      'Generally peaceful and beneficial',
      'Some species can reproduce rapidly',
      'Range from 1-7 cm (0.4-3 inches) in size',
      'Most are easy to care for',
      'Live 1-5 years depending on species',
      'Some varieties cannot reproduce in freshwater',
      'Help maintain tank cleanliness',
      'Popular for planted and community tanks'
    ],
    detailedInfo: {
      description: 'Beneficial gastropods that help control algae and maintain aquarium cleanliness while requiring minimal care.',
      size: '1-7 cm (0.4-3 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '20-28°C (68-82°F)',
        ph: '6.5-8.5',
        hardness: '8-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-5 years'
    }
  },
  {
    id: 'freshwater-crabs',
    name: 'Freshwater Crabs',
    category: 'Invertebrates',
    scientificName: 'Various Geosesarma, Cardisoma species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Include Vampire, Red Claw, and Thai Micro crabs',
      'Need both water and land areas (paludarium setup)',
      'Generally peaceful but can be territorial',
      'Some species are excellent escape artists',
      'Omnivorous scavengers with varied diets',
      'Many species need specific care requirements',
      'Live 2-8 years depending on species',
      'Some are fully aquatic, others semi-terrestrial',
      'Interesting and interactive pets',
      'May pinch if threatened but generally harmless'
    ],
    detailedInfo: {
      description: 'Fascinating crustaceans that add unique character to specialised setups, though many require specific paludarium conditions.',
      size: '1-10 cm (0.4-4 inches)',
      temperament: 'Peaceful/Territorial',
      diet: 'Omnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-8 years'
    }
  },
  {
    id: 'freshwater-crayfish',
    name: 'Freshwater Crayfish',
    category: 'Invertebrates',
    scientificName: 'Various Procambarus, Cherax species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Include Mexican Dwarf and Australian Red Claw varieties',
      'Can be aggressive and may eat fish',
      'Excellent scavengers and algae eaters',
      'Some species grow quite large',
      'Omnivorous with hearty appetites',
      'Many species are escape artists',
      'Live 3-8 years typically',
      'Need hiding places and territories',
      'Can be destructive to plants',
      'Fascinating behaviour and personality'
    ],
    detailedInfo: {
      description: 'Large, active crustaceans that make impressive centrepiece invertebrates but require careful consideration for tankmates.',
      size: '5-25 cm (2-10 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-26°C (64-79°F)',
        ph: '6.5-8.0',
        hardness: '8-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-8 years'
    }
  },
  {
    id: 'cherry-shrimp',
    name: 'Cherry Shrimp',
    category: 'Invertebrates',
    scientificName: 'Neocaridina davidi',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Most popular beginner shrimp variety',
      'Hardy and adaptable to various conditions',
      'Bright red colouration when mature',
      'Breed readily in freshwater aquariums',
      'Excellent algae and biofilm cleaners',
      'Very peaceful and non-aggressive',
      'Live 1-2 years typically',
      'Can be kept in groups of 10+',
      'Males smaller and less colourful than females',
      'Many colour grades available'
    ],
    detailedInfo: {
      description: 'The most popular freshwater shrimp, perfect for beginners with bright red colouration and easy care requirements.',
      size: '2-3 cm (0.8-1.2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '18-28°C (64-82°F)',
        ph: '6.5-8.0',
        hardness: '6-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-2 years'
    }
  },
  {
    id: 'amano-shrimp',
    name: 'Amano Shrimp',
    category: 'Invertebrates',
    scientificName: 'Caridina multidentata',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Excellent algae eaters, especially hair algae',
      'Larger and more active than Cherry shrimp',
      'Cannot breed in freshwater (need brackish)',
      'Very hardy and adaptable',
      'Transparent with dark spots/stripes',
      'More tolerant of fish than smaller shrimp',
      'Live 2-3 years typically',
      'Originally from Japan',
      'Good for controlling algae outbreaks',
      'Less likely to be eaten by fish due to size'
    ],
    detailedInfo: {
      description: 'Large, hardy shrimp excellent for algae control, especially effective against hair algae and safe with more fish species.',
      size: '3-5 cm (1.2-2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Herbivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: '6-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'crystal-red-shrimp',
    name: 'Crystal Red Shrimp',
    category: 'Invertebrates',
    scientificName: 'Caridina cantonensis',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Beautiful red and white striped pattern',
      'More sensitive to water parameters than Neocaridina',
      'Prefer soft, acidic water conditions',
      'Multiple grades based on pattern and colour',
      'Bred selectively for specific traits',
      'Need stable water conditions to thrive',
      'Live 1-2 years typically',
      'Popular with shrimp enthusiasts',
      'Can command high prices for top grades',
      'Best kept in species-only tanks'
    ],
    detailedInfo: {
      description: 'Stunning red and white striped shrimp that require more specific water conditions but reward with beautiful patterns.',
      size: '1.5-2.5 cm (0.6-1 inch)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '20-24°C (68-75°F)',
        ph: '6.0-6.8',
        hardness: '1-6 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '1-2 years'
    }
  },
  {
    id: 'blue-bolt-shrimp',
    name: 'Blue Bolt Shrimp',
    category: 'Invertebrates',
    scientificName: 'Caridina cantonensis var.',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Striking blue and white pattern',
      'Mutation of Crystal Red shrimp line',
      'Very sensitive to water parameters',
      'Require soft, acidic water like Crystal Reds',
      'High-grade specimens very valuable',
      'Need excellent water quality',
      'Live 1-2 years typically',
      'Best for experienced shrimp keepers',
      'Cannot crossbreed with Neocaridina species',
      'Prefer cooler water temperatures'
    ],
    detailedInfo: {
      description: 'Spectacular blue and white shrimp requiring expert care but offering stunning beauty for dedicated enthusiasts.',
      size: '1.5-2.5 cm (0.6-1 inch)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '18-23°C (64-73°F)',
        ph: '6.0-6.8',
        hardness: '1-6 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '1-2 years'
    }
  },
  {
    id: 'nerite-snails',
    name: 'Nerite Snails',
    category: 'Invertebrates',
    scientificName: 'Neritina species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Excellent algae eaters, especially on glass',
      'Cannot reproduce in pure freshwater',
      'Many beautiful patterns and colours available',
      'Very hardy and long-lived',
      'Will not overpopulate tanks',
      'Active during day and night',
      'Live 1-2 years typically in freshwater',
      'Include Zebra, Tiger, and Horned varieties',
      'Safe with all fish and shrimp',
      'May try to escape if unhappy'
    ],
    detailedInfo: {
      description: 'Outstanding algae-eating snails with beautiful patterns that cannot overpopulate freshwater tanks.',
      size: '1-3 cm (0.4-1.2 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-8.5',
        hardness: '12-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-2 years'
    }
  },
  {
    id: 'mystery-snails',
    name: 'Mystery Snails',
    category: 'Invertebrates',
    scientificName: 'Pomacea bridgesii',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Large, colourful apple snails',
      'Come in gold, blue, purple, and other colours',
      'Can reproduce in freshwater',
      'Very active and personable',
      'Good algae eaters but also eat plants',
      'Breathe air from surface',
      'Live 1-3 years typically',
      'Lay eggs above waterline',
      'Can grow quite large',
      'Popular beginner snails'
    ],
    detailedInfo: {
      description: 'Large, active snails with personality and beautiful colours, though they may eat soft plants.',
      size: '3-7 cm (1.2-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '20-28°C (68-82°F)',
        ph: '7.0-8.0',
        hardness: '12-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-3 years'
    }
  },
  {
    id: 'ramshorn-snails',
    name: 'Ramshorn Snails',
    category: 'Invertebrates',
    scientificName: 'Planorbarius corneus',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Flat, coiled shell resembling a ram\'s horn',
      'Come in brown, red, blue, and pink varieties',
      'Can reproduce very rapidly if overfed',
      'Good algae eaters and detritus cleaners',
      'Breathe air and have red blood (unusual)',
      'Self-fertilising hermaphrodites',
      'Live 1-2 years typically',
      'Population can explode if not controlled',
      'Beneficial but need population management',
      'Hardy and adaptable'
    ],
    detailedInfo: {
      description: 'Hardy snails with distinctive coiled shells that provide good cleaning but may reproduce rapidly if overfed.',
      size: '1-4 cm (0.4-1.6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '18-28°C (64-82°F)',
        ph: '6.5-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '1-2 years'
    }
  },
  {
    id: 'vampire-crabs',
    name: 'Vampire Crabs',
    category: 'Invertebrates',
    scientificName: 'Geosesarma species',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Beautiful purple and orange colouration',
      'Need both land and water areas (paludarium)',
      'Semi-terrestrial, not fully aquatic',
      'Very small and peaceful',
      'Excellent escape artists',
      'Feed on small insects and detritus',
      'Live 2-3 years typically',
      'Native to Southeast Asia',
      'Need high humidity environments',
      'Fascinating behaviour and personality'
    ],
    detailedInfo: {
      description: 'Stunning small crabs with purple and orange colours requiring specialised paludarium setups with both land and water.',
      size: '1-2 cm (0.4-0.8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '57+ litres (15+ gallons) paludarium',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.0-8.0',
        hardness: '10-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'thai-micro-crabs',
    name: 'Thai Micro Crabs',
    category: 'Invertebrates',
    scientificName: 'Limnopilos naiyanetri',
    compatibility: compatibilityMatrix['invertebrates'] || {},
    quickFacts: [
      'Smallest fully aquatic freshwater crab',
      'Completely peaceful and harmless',
      'Excellent for nano tanks',
      'Filter feeders that catch particles',
      'Very shy and often hide',
      'Can be kept with small fish and shrimp',
      'Live 1-2 years typically',
      'Recently discovered species (2017)',
      'Native to Thailand',
      'Often confused with small shrimp'
    ],
    detailedInfo: {
      description: 'The world\'s smallest freshwater crab, fully aquatic and perfect for nano tanks with peaceful tankmates.',
      size: '0.5-1 cm (0.2-0.4 inches)',
      temperament: 'Peaceful',
      diet: 'Filter feeder/Detritivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '1-2 years'
    }
  },
  {
    id: 'leaf-fish',
    name: 'Leaf Fish',
    category: 'Speciality',
    scientificName: 'Monocirrhus polyacanthus',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Masters of camouflage, look exactly like dead leaves',
      'Ambush predators that eat live fish',
      'Extremely slow-moving and patient hunters',
      'Need soft, acidic water conditions',
      'Require live or frozen foods only',
      'Very sensitive to water quality changes',
      'Live 3-5 years with proper care',
      'Best kept in species-only tanks',
      'Native to South American river systems',
      'Fascinating but challenging to keep'
    ],
    detailedInfo: {
      description: 'Remarkable camouflaged predators that perfectly mimic dead leaves, requiring expert care and live foods.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Predatory',
      diet: 'Carnivorous (live fish)',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.5-6.5',
        hardness: '1-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'archerfish',
    name: 'Archerfish',
    category: 'Speciality',
    scientificName: 'Toxotes species',
    compatibility: compatibilityMatrix['brackish-fish'] || {},
    quickFacts: [
      'Famous for shooting water jets to catch insects',
      'Need brackish water conditions when adult',
      'Highly intelligent and interactive',
      'Require large tanks with overhanging branches',
      'Social fish that do better in groups',
      'Excellent jumpers, need secure lids',
      'Live 5-10 years typically',
      'Feed primarily on insects and surface foods',
      'Native to Southeast Asia and Australia',
      'Fascinating natural behaviour'
    ],
    detailedInfo: {
      description: 'Intelligent fish famous for their ability to shoot down insects with precise water jets, requiring brackish conditions.',
      size: '15-25 cm (6-10 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Insectivorous/Carnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '25-30°C (77-86°F)',
        ph: '7.0-8.5',
        hardness: '10-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '5-10 years'
    }
  },
  {
    id: 'badis',
    name: 'Badis',
    category: 'Speciality',
    scientificName: 'Badis badis',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Small, colourful fish with complex behaviours',
      'Males more colourful and territorial than females',
      'Prefer soft, slightly acidic water',
      'Need plenty of hiding places and territories',
      'Best kept in species-only or carefully planned tanks',
      'Feed on small live and frozen foods',
      'Live 3-5 years typically',
      'Can change colour based on mood',
      'Native to India and Myanmar',
      'Popular with speciality fish enthusiasts'
    ],
    detailedInfo: {
      description: 'Small, beautifully coloured fish with fascinating territorial behaviours, perfect for dedicated nano setups.',
      size: '5-8 cm (2-3 inches)',
      temperament: 'Territorial',
      diet: 'Carnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'dario',
    name: 'Dario',
    category: 'Speciality',
    scientificName: 'Dario dario',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Tiny, brilliantly coloured nano fish',
      'Males extremely territorial despite small size',
      'Need very small tank mates or species-only setup',
      'Prefer heavily planted tanks with hiding spots',
      'Feed on micro foods and small live prey',
      'Sensitive to water quality changes',
      'Live 2-3 years typically',
      'Perfect for nano aquariums',
      'Native to India and Myanmar',
      'Also called Scarlet Badis'
    ],
    detailedInfo: {
      description: 'Tiny but spectacular nano fish with intense colours and surprising territorial behaviour for their size.',
      size: '2-3 cm (0.8-1.2 inches)',
      temperament: 'Territorial',
      diet: 'Micro carnivorous',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '8-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'freshwater-eels',
    name: 'Freshwater Eels',
    category: 'Speciality',
    scientificName: 'Various Mastacembelus, Macrognathus species',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Include Spiny, Tire Track, and Fire eels',
      'Nocturnal and prefer hiding during day',
      'Excellent escape artists, need secure lids',
      'Can grow very large depending on species',
      'Bury themselves in soft substrate',
      'Carnivorous with preference for live foods',
      'Live 8-18 years depending on species',
      'Need well-oxygenated water',
      'Generally peaceful but may eat small fish',
      'Fascinating snake-like movement'
    ],
    detailedInfo: {
      description: 'Elongated, snake-like fish that are fascinating to watch but require specific care and secure tanks.',
      size: '15-75 cm (6-30 inches)',
      temperament: 'Peaceful but predatory',
      diet: 'Carnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '8-18 years'
    }
  },
  {
    id: 'freshwater-gobies',
    name: 'Freshwater Gobies',
    category: 'Speciality',
    scientificName: 'Various Stiphodon, Rhinogobius species',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Include Bumblebee, Peacock, and Neon gobies',
      'Bottom-dwelling with sucker-like fins',
      'Many species prefer cooler water',
      'Need good water flow and oxygenation',
      'Often require specific foods like aufwuchs',
      'Males more colourful and territorial',
      'Live 2-5 years depending on species',
      'Some species are excellent algae eaters',
      'Can be challenging to feed properly',
      'Fascinating behaviour and personality'
    ],
    detailedInfo: {
      description: 'Small bottom-dwellers with sucker fins and fascinating behaviours, though many require specific water conditions.',
      size: '3-8 cm (1-3 inches)',
      temperament: 'Peaceful/Territorial',
      diet: 'Omnivorous/Herbivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '18-26°C (64-79°F)',
        ph: '6.5-7.5',
        hardness: '8-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-5 years'
    }
  },
  {
    id: 'gudgeons',
    name: 'Gudgeons',
    category: 'Speciality',
    scientificName: 'Various Hypseleotris, Mogurnda species',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Include Empire and Purple Spotted gudgeons',
      'Bottom to mid-water dwelling fish',
      'Generally peaceful community fish',
      'Prefer well-oxygenated water with flow',
      'Males more colourful during breeding',
      'Omnivorous with hearty appetites',
      'Live 3-6 years typically',
      'Some species prefer cooler water',
      'Native to Australia and New Guinea',
      'Underrated aquarium fish'
    ],
    detailedInfo: {
      description: 'Peaceful, colourful fish from Australia that make excellent community members with proper water conditions.',
      size: '5-15 cm (2-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-26°C (64-79°F)',
        ph: '6.5-7.5',
        hardness: '8-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-6 years'
    }
  },
  {
    id: 'leporinus',
    name: 'Leporinus',
    category: 'Speciality',
    scientificName: 'Leporinus fasciatus',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Active, fast-swimming schooling fish',
      'Excellent jumpers, need secure lids',
      'Can be aggressive to slower tankmates',
      'Need large groups of 6+ individuals',
      'Omnivorous but prefer vegetable matter',
      'Very active and need plenty of swimming space',
      'Live 8-12 years typically',
      'Beautiful black and yellow striped pattern',
      'Native to South America',
      'Best in large, fast-flowing setups'
    ],
    detailedInfo: {
      description: 'Fast, active schooling fish with striking patterns that need large tanks and careful tankmate selection.',
      size: '20-30 cm (8-12 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'freshwater-pufferfish',
    name: 'Freshwater Pufferfish',
    category: 'Speciality',
    scientificName: 'Various Tetraodon, Carinotetraodon species',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Include Dwarf, Figure 8, and Green Spotted puffers',
      'Highly intelligent and interactive',
      'Can be aggressive and nippy',
      'Need hard foods to wear down growing teeth',
      'Some species require brackish water',
      'Produce significant waste',
      'Live 5-10 years depending on species',
      'Can inflate when threatened',
      'Need species-specific research',
      'Very personable but challenging'
    ],
    detailedInfo: {
      description: 'Intelligent, interactive fish with unique behaviours but requiring specific care and careful tankmate selection.',
      size: '2-20 cm (0.8-8 inches)',
      temperament: 'Aggressive/Territorial',
      diet: 'Carnivorous (hard foods)',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.0-8.5',
        hardness: '10-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '5-10 years'
    }
  },
  {
    id: 'ropefish',
    name: 'Ropefish',
    category: 'Speciality',
    scientificName: 'Erpetoichthys calabaricus',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Snake-like primitive fish with external gills',
      'Nocturnal and secretive during day',
      'Excellent escape artists, need tight-fitting lids',
      'Can survive out of water for short periods',
      'Peaceful but will eat small fish',
      'Need soft substrate to burrow in',
      'Live 8-20 years with proper care',
      'Social fish that prefer groups',
      'Native to West Africa',
      'Fascinating prehistoric appearance'
    ],
    detailedInfo: {
      description: 'Primitive, snake-like fish with external gills that are fascinating but require secure tanks and specific care.',
      size: '30-60 cm (12-24 inches)',
      temperament: 'Peaceful but predatory',
      diet: 'Carnivorous',
      tankSize: '284+ litres (75+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '8-20 years'
    }
  },
  {
    id: 'snakehead',
    name: 'Snakehead',
    category: 'Speciality',
    scientificName: 'Various Channa species',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Predatory fish that can breathe air',
      'Highly intelligent and interactive',
      'Can be aggressive to tankmates',
      'Excellent escape artists and jumpers',
      'Need secure lids and species-only tanks',
      'Carnivorous with large appetites',
      'Live 10-30 years depending on species',
      'Range from small to very large species',
      'Illegal in some regions due to invasive potential',
      'Fascinating behaviour and personality'
    ],
    detailedInfo: {
      description: 'Intelligent predatory fish that can breathe air, requiring expert care and species-only setups in most cases.',
      size: '15-100 cm (6-40 inches)',
      temperament: 'Aggressive/Predatory',
      diet: 'Carnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-30 years'
    }
  },
  {
    id: 'dwarf-pufferfish',
    name: 'Dwarf Pufferfish',
    category: 'Speciality',
    scientificName: 'Carinotetraodon travancoricus',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Smallest freshwater pufferfish species',
      'Highly intelligent and interactive',
      'Can be nippy with tankmates',
      'Need live or frozen foods for teeth wear',
      'Fully freshwater, no brackish needed',
      'Very active and curious',
      'Live 4-6 years typically',
      'Perfect for nano predator setups',
      'Native to Southwest India',
      'Also called Pea Puffer'
    ],
    detailedInfo: {
      description: 'The smallest pufferfish, perfect for nano setups while maintaining the intelligence and personality of larger species.',
      size: '2-3 cm (0.8-1.2 inches)',
      temperament: 'Aggressive/Territorial',
      diet: 'Carnivorous (small live foods)',
      tankSize: '19+ litres (5+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'figure-8-pufferfish',
    name: 'Figure 8 Pufferfish',
    category: 'Speciality',
    scientificName: 'Tetraodon biocellatus',
    compatibility: compatibilityMatrix['brackish-fish'] || {},
    quickFacts: [
      'Brackish water pufferfish with distinctive pattern',
      'More peaceful than many puffer species',
      'Need gradually increasing salinity as they age',
      'Excellent personality and intelligence',
      'Feed on hard-shelled foods for dental health',
      'Can be kept with other brackish species',
      'Live 6-10 years typically',
      'Named for figure-8 pattern on back',
      'Native to Southeast Asia',
      'Tolerate some freshwater when young'
    ],
    detailedInfo: {
      description: 'Popular brackish puffer with distinctive markings and more peaceful temperament than most pufferfish.',
      size: '6-8 cm (2.5-3 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Carnivorous (hard foods)',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.5-8.5',
        hardness: '15-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '6-10 years'
    }
  },
  {
    id: 'tire-track-eel',
    name: 'Tire Track Eel',
    category: 'Speciality',
    scientificName: 'Mastacembelus armatus',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Large eel with distinctive tire-track pattern',
      'Nocturnal and prefers hiding during day',
      'Excellent escape artist, needs secure lid',
      'Can grow very large (60+ cm / 24+ inches)',
      'Peaceful but will eat fish that fit in mouth',
      'Need soft substrate for burrowing',
      'Live 15-20 years with proper care',
      'Requires large tank when adult',
      'Native to Southeast Asia',
      'Popular but challenging eel species'
    ],
    detailedInfo: {
      description: 'Large, impressive eel with striking patterns that requires expert care and very large tanks when mature.',
      size: '60-90 cm (24-36 inches)',
      temperament: 'Peaceful but predatory',
      diet: 'Carnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'fire-eel',
    name: 'Fire Eel',
    category: 'Speciality',
    scientificName: 'Mastacembelus erythrotaenia',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Stunning eel with red and orange markings',
      'Can grow extremely large (up to 100 cm)',
      'Nocturnal predator, active at night',
      'Very long-lived (20+ years)',
      'Need enormous tanks when adult',
      'Excellent escape artists',
      'Peaceful with large tankmates',
      'Require soft substrate and hiding places',
      'Native to Southeast Asia',
      'Considered holy grail of eel keeping'
    ],
    detailedInfo: {
      description: 'Magnificent large eel with fiery colours, representing the pinnacle of eel keeping but requiring massive tanks.',
      size: '75-100 cm (30-40 inches)',
      temperament: 'Peaceful but predatory',
      diet: 'Carnivorous',
      tankSize: '750+ litres (200+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '20+ years'
    }
  },
  {
    id: 'peacock-goby',
    name: 'Peacock Goby',
    category: 'Speciality',
    scientificName: 'Tateurndina ocellicauda',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Beautiful small goby with peacock-like colours',
      'Peaceful and suitable for community tanks',
      'Males more colourful with longer fins',
      'Breed readily in aquarium conditions',
      'Prefer soft, slightly acidic water',
      'Feed on small live and frozen foods',
      'Live 3-5 years typically',
      'One of the more peaceful goby species',
      'Native to Papua New Guinea',
      'Excellent choice for planted tanks'
    ],
    detailedInfo: {
      description: 'Beautiful, peaceful goby perfect for community tanks with stunning colours and interesting breeding behaviour.',
      size: '6-8 cm (2.5-3 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '57+ litres (15+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'bumblebee-goby',
    name: 'Bumblebee Goby',
    category: 'Speciality',
    scientificName: 'Brachygobius doriae',
    compatibility: compatibilityMatrix['brackish-fish'] || {},
    quickFacts: [
      'Small goby with distinctive yellow and black stripes',
      'Prefer brackish water conditions',
      'Bottom-dwelling with sucker-like fins',
      'Can be territorial with similar species',
      'Feed primarily on live and frozen foods',
      'Males more territorial during breeding',
      'Live 2-4 years typically',
      'Need good water flow and oxygenation',
      'Native to Southeast Asia',
      'Popular but require specific conditions'
    ],
    detailedInfo: {
      description: 'Striking small goby with bumblebee colouration requiring brackish conditions and specific care.',
      size: '3-4 cm (1.2-1.6 inches)',
      temperament: 'Territorial',
      diet: 'Carnivorous',
      tankSize: '38+ litres (10+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.0-8.5',
        hardness: '15-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-4 years'
    }
  },
  {
    id: 'empire-gudgeon',
    name: 'Empire Gudgeon',
    category: 'Speciality',
    scientificName: 'Hypseleotris compressa',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Beautiful Australian native with iridescent colours',
      'Peaceful community fish when properly kept',
      'Males develop stunning breeding colours',
      'Prefer cooler water than most tropicals',
      'Need well-oxygenated water with flow',
      'Omnivorous with hearty appetites',
      'Live 4-6 years typically',
      'Excellent for temperate community setups',
      'Native to eastern Australia',
      'Underappreciated aquarium species'
    ],
    detailedInfo: {
      description: 'Stunning Australian fish with iridescent colours, perfect for cooler community tanks with proper water flow.',
      size: '8-12 cm (3-5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '18-24°C (64-75°F)',
        ph: '6.5-7.5',
        hardness: '8-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'dwarf-snakehead',
    name: 'Dwarf Snakehead',
    category: 'Speciality',
    scientificName: 'Channa gachua',
    compatibility: compatibilityMatrix['misc-fish'] || {},
    quickFacts: [
      'Smallest snakehead species, more manageable size',
      'Can breathe air from surface',
      'Highly intelligent with strong personalities',
      'Less aggressive than larger snakehead species',
      'Can be kept with carefully chosen tankmates',
      'Excellent escape artists and jumpers',
      'Live 8-12 years typically',
      'Native to Southeast Asia',
      'Legal in more regions than larger species',
      'Still predatory but more community-friendly'
    ],
    detailedInfo: {
      description: 'The most manageable snakehead species, intelligent and interactive while being small enough for home aquariums.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'jack-dempsey',
    name: 'Jack Dempsey',
    category: 'Cichlids',
    scientificName: 'Rocio octofasciata',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Popular Central American cichlid with personality',
      'Can be aggressive, especially when breeding',
      'Named after famous boxer Jack Dempsey',
      'Males larger and more colourful than females',
      'Need large tanks due to size and aggression',
      'Omnivorous with hearty appetites',
      'Live 8-15 years with proper care',
      'Electric Blue variety available',
      'Native to Central America',
      'Excellent parents with strong pair bonds'
    ],
    detailedInfo: {
      description: 'Classic Central American cichlid with strong personality and beautiful colouration, though requiring careful tankmate selection.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '22-30°C (72-86°F)',
        ph: '6.0-8.0',
        hardness: '9-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-15 years'
    }
  },
  {
    id: 'convict-cichlid',
    name: 'Convict Cichlid',
    category: 'Cichlids',
    scientificName: 'Amatitlania nigrofasciata',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Hardy and prolific breeding cichlid',
      'Black and white striped pattern like prison uniform',
      'Extremely territorial when breeding',
      'Very easy to breed in aquarium conditions',
      'Males larger with pointed fins',
      'Can be kept with other robust cichlids',
      'Live 8-10 years typically',
      'Excellent starter cichlid for beginners',
      'Native to Central America',
      'Pink and other colour varieties available'
    ],
    detailedInfo: {
      description: 'Hardy, easy-to-breed cichlid perfect for beginners wanting to experience cichlid breeding behaviour.',
      size: '10-15 cm (4-6 inches)',
      temperament: 'Aggressive when breeding',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '20-36°C (68-97°F)',
        ph: '6.5-8.0',
        hardness: '9-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'firemouth-cichlid',
    name: 'Firemouth Cichlid',
    category: 'Cichlids',
    scientificName: 'Thorichthys meeki',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Beautiful cichlid with bright red throat and belly',
      'Less aggressive than many Central American species',
      'Males more colourful with extended fins',
      'Display red colouration when excited or breeding',
      'Relatively peaceful for a Central American cichlid',
      'Good community cichlid with proper tankmates',
      'Live 10-15 years with good care',
      'Native to Central America and southern Mexico',
      'Popular in cichlid community tanks',
      'Excellent parents with interesting behaviour'
    ],
    detailedInfo: {
      description: 'Stunning cichlid with fiery red colouration that is more peaceful than most Central American species.',
      size: '15-17 cm (6-7 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '21-30°C (70-86°F)',
        ph: '6.5-8.0',
        hardness: '8-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'texas-cichlid',
    name: 'Texas Cichlid',
    category: 'Cichlids',
    scientificName: 'Herichthys cyanoguttatus',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Large, aggressive cichlid from southern USA',
      'Beautiful blue and green spotted pattern',
      'Very territorial and aggressive when mature',
      'Can grow quite large in aquarium conditions',
      'Males develop pronounced nuchal hump',
      'Need species-only or very careful tankmate selection',
      'Live 10-13 years typically',
      'Only cichlid native to the United States',
      'Excellent parents but very protective',
      'Require large tanks due to size and aggression'
    ],
    detailedInfo: {
      description: 'Large, impressive cichlid with beautiful spotting but requiring expert care due to size and aggressive nature.',
      size: '30 cm (12 inches)',
      temperament: 'Very Aggressive',
      diet: 'Omnivorous',
      tankSize: '284+ litres (75+ gallons)',
      waterParams: {
        temperature: '20-33°C (68-91°F)',
        ph: '6.5-8.5',
        hardness: '8-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-13 years'
    }
  },
  {
    id: 'green-terror',
    name: 'Green Terror',
    category: 'Cichlids',
    scientificName: 'Andinoacara rivulatus',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Stunning large cichlid with metallic green colouration',
      'Very aggressive and territorial as adults',
      'Males develop impressive orange and blue coloration',
      'Can grow very large and need massive tanks',
      'Need species-only tanks or very careful planning',
      'Excellent parents with strong family bonds',
      'Live 7-10 years typically',
      'Native to Pacific coast of South America',
      'Popular but challenging species',
      'Require excellent filtration due to waste production'
    ],
    detailedInfo: {
      description: 'Magnificent large cichlid with stunning metallic colours but requiring expert care and very large tanks.',
      size: '20-30 cm (8-12 inches)',
      temperament: 'Very Aggressive',
      diet: 'Omnivorous',
      tankSize: '284+ litres (75+ gallons)',
      waterParams: {
        temperature: '20-24°C (68-75°F)',
        ph: '6.5-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '7-10 years'
    }
  },
  {
    id: 'salvini-cichlid',
    name: 'Salvini Cichlid',
    category: 'Cichlids',
    scientificName: 'Trichromis salvini',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Beautiful yellow and black cichlid with red accents',
      'Moderately aggressive Central American species',
      'Males more colourful with extended fins',
      'Can be kept in cichlid community with planning',
      'Excellent parents with interesting breeding behaviour',
      'Prefer slightly alkaline water conditions',
      'Live 12-15 years with proper care',
      'Native to Central America',
      'Also called Yellow Belly cichlid',
      'Hardy and adaptable to various conditions'
    ],
    detailedInfo: {
      description: 'Attractive Central American cichlid with yellow and black colouration, suitable for intermediate cichlid keepers.',
      size: '15-22 cm (6-9 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.0-8.0',
        hardness: '10-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '12-15 years'
    }
  },
  {
    id: 'blood-parrot-cichlid',
    name: 'Blood Parrot Cichlid',
    category: 'Cichlids',
    scientificName: 'Hybrid species',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Hybrid cichlid with unique rounded body shape',
      'Bright orange to red colouration',
      'Generally peaceful for a large cichlid',
      'Cannot breed naturally due to hybrid nature',
      'Often have difficulty eating due to mouth shape',
      'Very personable and interactive with owners',
      'Live 10-15 years typically',
      'Controversial due to artificial creation',
      'Popular in aquarium trade despite controversy',
      'Need soft foods due to mouth deformity'
    ],
    detailedInfo: {
      description: 'Controversial hybrid cichlid with unique appearance and peaceful temperament, though requiring special dietary considerations.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous (soft foods)',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.4',
        hardness: '6-18 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'jaguar-cichlid',
    name: 'Jaguar Cichlid',
    category: 'Cichlids',
    scientificName: 'Parachromis managuensis',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Large, aggressive predatory cichlid',
      'Beautiful spotted pattern resembling jaguar markings',
      'Will eat any fish that fits in mouth',
      'Can grow very large (35+ cm / 14+ inches)',
      'Need species-only tanks when adult',
      'Extremely territorial and aggressive',
      'Live 12-15 years with proper care',
      'Native to Central America',
      'Require massive tanks due to size',
      'Fascinating behaviour but challenging to keep'
    ],
    detailedInfo: {
      description: 'Massive, aggressive predatory cichlid with stunning jaguar-like spots, requiring expert care and enormous tanks.',
      size: '35-60 cm (14-24 inches)',
      temperament: 'Extremely Aggressive',
      diet: 'Carnivorous',
      tankSize: '756+ litres (200+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '7.0-8.7',
        hardness: '10-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '12-15 years'
    }
  },
  {
    id: 'red-devil-cichlid',
    name: 'Red Devil Cichlid',
    category: 'Cichlids',
    scientificName: 'Amphilophus labiatus',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Large, extremely aggressive Central American cichlid',
      'Bright red to orange colouration when mature',
      'Males develop pronounced nuchal hump',
      'Very intelligent and interactive with owners',
      'Need species-only tanks due to extreme aggression',
      'Can grow very large (30+ cm / 12+ inches)',
      'Live 10-12 years with proper care',
      'Require massive tanks and excellent filtration',
      'Native to Nicaragua',
      'One of the most aggressive cichlids in hobby'
    ],
    detailedInfo: {
      description: 'Extremely aggressive but intelligent cichlid with stunning red colouration, requiring expert care and species-only setups.',
      size: '25-35 cm (10-14 inches)',
      temperament: 'Extremely Aggressive',
      diet: 'Omnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '21-27°C (70-81°F)',
        ph: '6.5-8.5',
        hardness: '6-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'midas-cichlid',
    name: 'Midas Cichlid',
    category: 'Cichlids',
    scientificName: 'Amphilophus citrinellus',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Large cichlid that changes from grey to bright yellow/orange',
      'Very aggressive and territorial when mature',
      'Males develop impressive nuchal hump',
      'Closely related to Red Devil cichlid',
      'Need very large tanks due to size and aggression',
      'Excellent parents but extremely protective',
      'Live 10-15 years typically',
      'Native to Central America',
      'Popular but challenging species',
      'Can hybridise with Red Devils'
    ],
    detailedInfo: {
      description: 'Large, aggressive cichlid that transforms from grey to brilliant yellow/orange, requiring expert care and massive tanks.',
      size: '25-35 cm (10-14 inches)',
      temperament: 'Extremely Aggressive',
      diet: 'Omnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '23-36°C (73-97°F)',
        ph: '7.0-8.7',
        hardness: '6-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'flowerhorn-cichlid',
    name: 'Flowerhorn Cichlid',
    category: 'Cichlids',
    scientificName: 'Hybrid species',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Hybrid cichlid with prominent nuchal hump',
      'Bright colours with unique patterns',
      'Extremely aggressive and territorial',
      'Very interactive and personable with owners',
      'Cannot breed naturally due to hybrid nature',
      'Need species-only tanks',
      'Live 8-12 years typically',
      'Popular in Asia, controversial elsewhere',
      'Created from various Central American species',
      'Require excellent filtration due to waste production'
    ],
    detailedInfo: {
      description: 'Controversial hybrid cichlid with prominent head bump and bright colours, requiring species-only setups due to extreme aggression.',
      size: '25-40 cm (10-16 inches)',
      temperament: 'Extremely Aggressive',
      diet: 'Omnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '26-30°C (79-86°F)',
        ph: '6.5-7.8',
        hardness: '9-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'rainbow-cichlid',
    name: 'Rainbow Cichlid',
    category: 'Cichlids',
    scientificName: 'Herotilapia multispinosa',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Peaceful Central American cichlid',
      'Beautiful iridescent colouration',
      'Much less aggressive than most Central Americans',
      'Good community cichlid with proper tankmates',
      'Males slightly larger with more colour',
      'Easy to breed in aquarium conditions',
      'Live 6-9 years typically',
      'Native to Central America',
      'Excellent choice for cichlid beginners',
      'Adaptable to various water conditions'
    ],
    detailedInfo: {
      description: 'Peaceful Central American cichlid with beautiful iridescent colours, perfect for community cichlid tanks.',
      size: '10-15 cm (4-6 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '20-30°C (68-86°F)',
        ph: '6.5-8.0',
        hardness: '8-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '6-9 years'
    }
  },
  {
    id: 'nicaraguan-cichlid',
    name: 'Nicaraguan Cichlid',
    category: 'Cichlids',
    scientificName: 'Hypsophrys nicaraguensis',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Beautiful gold and blue cichlid from Nicaragua',
      'Moderately aggressive Central American species',
      'Males develop nuchal hump when mature',
      'Excellent parents with elaborate care rituals',
      'Can be kept in cichlid communities with planning',
      'Prefer slightly alkaline water conditions',
      'Live 8-10 years typically',
      'Native to Nicaragua and Costa Rica',
      'Also called Moga or Chessboard cichlid',
      'Hardy and adaptable species'
    ],
    detailedInfo: {
      description: 'Attractive Central American cichlid with gold and blue colouration, suitable for intermediate cichlid keepers.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '22-30°C (72-86°F)',
        ph: '6.5-8.5',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'black-belt-cichlid',
    name: 'Black Belt Cichlid',
    category: 'Cichlids',
    scientificName: 'Vieja maculicauda',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Large cichlid with distinctive black band pattern',
      'Less aggressive than many large Central Americans',
      'Beautiful silver body with black markings',
      'Males develop nuchal hump and extended fins',
      'Can be kept with other large, robust cichlids',
      'Excellent parents with strong family bonds',
      'Live 8-12 years typically',
      'Native to Central America',
      'Also called Black Belt or Quetzal cichlid',
      'Require large tanks due to adult size'
    ],
    detailedInfo: {
      description: 'Large, impressive cichlid with distinctive black belt markings, less aggressive than many similar-sized species.',
      size: '30-35 cm (12-14 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '378+ litres (100+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-8.0',
        hardness: '8-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'blue-acara',
    name: 'Blue Acara',
    category: 'Cichlids',
    scientificName: 'Andinoacara pulcher',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Beautiful peaceful cichlid with blue colouration',
      'Much less aggressive than most Central Americans',
      'Excellent community cichlid with proper tankmates',
      'Males develop extended fins and brighter colours',
      'Easy to breed in aquarium conditions',
      'Hardy and adaptable to various conditions',
      'Live 8-10 years typically',
      'Native to South America but often grouped with Central Americans',
      'Perfect for beginners wanting cichlid experience',
      'Peaceful enough for community tanks'
    ],
    detailedInfo: {
      description: 'Peaceful, beautiful cichlid with stunning blue colouration, perfect for community tanks and beginner cichlid keepers.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful/Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '20-30°C (68-86°F)',
        ph: '6.0-8.0',
        hardness: '6-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'red-terror',
    name: 'Red Terror',
    category: 'Cichlids',
    scientificName: 'Mesoheros festae',
    compatibility: compatibilityMatrix['new-world-cichlids'] || {},
    quickFacts: [
      'Large, extremely aggressive cichlid with red colouration',
      'Males develop stunning red and orange breeding colours',
      'Very territorial and predatory when mature',
      'Can grow very large (45+ cm / 18+ inches)',
      'Need species-only tanks or very careful planning',
      'Excellent parents but extremely protective',
      'Live 10-20 years with proper care',
      'Native to Ecuador and Peru',
      'One of the most challenging cichlids to keep',
      'Require massive tanks and expert care'
    ],
    detailedInfo: {
      description: 'Massive, extremely aggressive cichlid with stunning red colouration, representing the ultimate challenge in cichlid keeping.',
      size: '35-50 cm (14-20 inches)',
      temperament: 'Extremely Aggressive',
      diet: 'Carnivorous',
      tankSize: '756+ litres (200+ gallons)',
      waterParams: {
        temperature: '21-25°C (70-77°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-20 years'
    }
  },

  // Axolotls - All varieties and morphs
  {
    id: 'leucistic-axolotl',
    name: 'Leucistic Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Most popular axolotl colour morph with pink gills',
      'White/pale body with dark eyes',
      'Requires cool water temperatures year-round',
      'Can regenerate entire limbs and organs',
      'Critically endangered in the wild',
      'Lives entirely underwater as neotenic salamander',
      'Requires high water quality and good filtration',
      'Cannot be housed with fish or other species',
      'Sensitive to water temperature fluctuations',
      'Can live 15+ years with proper care'
    ],
    detailedInfo: {
      description: 'The Leucistic Axolotl is the most recognizable and popular morph, featuring a white or pale pink body with bright pink external gills and dark eyes. This critically endangered species from Mexico requires specialized care and cool water conditions.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'wild-type-axolotl',
    name: 'Wild Type Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Natural wild coloration with dark mottled pattern',
      'Most genetically diverse and hardy morph',
      'Dark brown/black with gold flecks',
      'Original colouration found in Lake Xochimilco',
      'More resistant to diseases than other morphs',
      'Excellent regeneration abilities',
      'Requires species-only tank setup',
      'Sensitive to bright lighting',
      'Needs cool water and good water quality',
      'Essential for conservation breeding programs'
    ],
    detailedInfo: {
      description: 'The Wild Type Axolotl represents the natural coloration found in their native Lake Xochimilco. They feature a dark mottled pattern with gold flecks and are generally considered the hardiest of all axolotl morphs.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'melanoid-axolotl',
    name: 'Melanoid Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Solid black coloration without gold flecks',
      'Lacks iridophores (reflective cells)',
      'Pure black appearance throughout life',
      'Popular for their striking appearance',
      'Same care requirements as other morphs',
      'Cannot change colour like wild types',
      'Excellent regeneration capabilities',
      'Requires cool water temperatures',
      'Sensitive to water quality changes',
      'Must be kept alone or with other axolotls'
    ],
    detailedInfo: {
      description: 'Melanoid Axolotls are characterized by their solid black coloration due to the absence of iridophores. They maintain their dark appearance throughout their lives and are prized for their striking, uniform black colour.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'albino-axolotl',
    name: 'Albino Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'True albino with pink/red eyes',
      'White to pale yellow body coloration',
      'More light-sensitive than other morphs',
      'Requires subdued lighting conditions',
      'Pink external gills like leucistic',
      'Lacks melanin pigmentation completely',
      'Same regeneration abilities as other axolotls',
      'Needs excellent water quality',
      'Cool water temperature essential',
      'Cannot be housed with fish or other species'
    ],
    detailedInfo: {
      description: 'True Albino Axolotls completely lack melanin pigmentation, resulting in a white to pale yellow body with distinctive pink or red eyes. They are more sensitive to light than other morphs and require careful lighting management.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'golden-albino-axolotl',
    name: 'Golden Albino Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Golden yellow body with pink/red eyes',
      'Combination of albino and golden traits',
      'Beautiful golden colouration throughout life',
      'Light-sensitive like true albinos',
      'Requires subdued tank lighting',
      'Pink external gills add to appeal',
      'Excellent regeneration abilities',
      'Needs species-only tank setup',
      'Cool water temperatures essential',
      'Popular among collectors for unique colour'
    ],
    detailedInfo: {
      description: 'Golden Albino Axolotls combine the albino gene with golden coloration, resulting in beautiful golden-yellow individuals with pink or red eyes. They share the light sensitivity of true albinos while displaying stunning golden hues.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'copper-axolotl',
    name: 'Copper Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Copper-orange body with dark eyes',
      'Heterozygous for both melanoid and albino genes',
      'Unique copper coloration throughout life',
      'Pink gills contrast with copper body',
      'Intermediate light sensitivity',
      'Popular morph among enthusiasts',
      'Excellent regeneration capabilities',
      'Requires cool water temperatures',
      'Must be housed in species-only tank',
      'Hardy once established in proper conditions'
    ],
    detailedInfo: {
      description: 'Copper Axolotls display a distinctive copper-orange coloration with dark eyes. This morph results from being heterozygous for both melanoid and albino genes, creating their unique and attractive copper appearance.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'gfp-axolotl',
    name: 'GFP (Green Fluorescent Protein) Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Genetically modified to produce green fluorescent protein',
      'Glows green under UV or blue light',
      'Usually leucistic base with GFP gene',
      'Created for scientific research purposes',
      'Normal behaviour and care requirements',
      'Fluorescence visible in soft tissues',
      'Same regeneration abilities as normal axolotls',
      'Controversial in some keeping communities',
      'Cool water temperatures essential',
      'Requires species-only tank setup'
    ],
    detailedInfo: {
      description: 'GFP Axolotls have been genetically modified to express green fluorescent protein, causing them to glow green under UV or blue light. While controversial, they have the same care requirements and behaviours as normal axolotls.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'mosaic-axolotl',
    name: 'Mosaic Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Patches of different colours on same individual',
      'Results from genetic chimerism or mutation',
      'Each individual has unique pattern',
      'Can combine multiple morph characteristics',
      'Rare and highly sought after by collectors',
      'Same care requirements as other morphs',
      'Excellent regeneration abilities',
      'Cool water temperatures essential',
      'Cannot be housed with other species',
      'Pattern may change slightly with age'
    ],
    detailedInfo: {
      description: 'Mosaic Axolotls display patches of different colours on the same individual, often combining characteristics of multiple morphs. This rare condition results from genetic chimerism or somatic mutations, making each individual unique.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'chimera-axolotl',
    name: 'Chimera Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'Split-pattern with distinct left/right differences',
      'True genetic chimera from two embryos',
      'Often shows leucistic/melanoid split',
      'Extremely rare in captive breeding',
      'Each side may have different eye colours',
      'Highly prized by collectors and researchers',
      'Normal axolotl care requirements',
      'Excellent regeneration abilities',
      'Cool water temperatures essential',
      'Must be housed in species-only setup'
    ],
    detailedInfo: {
      description: 'Chimera Axolotls are true genetic chimeras resulting from the fusion of two embryos, often displaying distinct colour patterns on each side of their body. They are extremely rare and highly valued by both collectors and researchers.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },
  {
    id: 'piebald-axolotl',
    name: 'Piebald Axolotl',
    category: 'Amphibians',
    scientificName: 'Ambystoma mexicanum',
    compatibility: compatibilityMatrix['amphibians'] || {},
    quickFacts: [
      'White patches on darker base colour',
      'Similar to leucistic but with dark patches',
      'Irregular white spotting pattern',
      'Each individual has unique markings',
      'Less common than solid colour morphs',
      'Normal axolotl behaviour and care',
      'Excellent regeneration capabilities',
      'Cool water temperatures required',
      'Species-only tank essential',
      'Pattern may change slightly with growth'
    ],
    detailedInfo: {
      description: 'Piebald Axolotls display irregular white patches on a darker base colour, creating unique spotted or patched patterns. Each individual has distinct markings, making them highly individual and sought after by collectors.',
      size: '23-30 cm (9-12 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '151+ litres (40+ gallons) for one adult',
      waterParams: {
        temperature: '14-20°C (57-68°F)',
        ph: '6.5-8.0',
        hardness: '7-14 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15-20 years'
    }
  },

  // Malawian Cichlids - Lake Malawi Mbuna (Rock Dwellers)
  {
    id: 'electric-blue-johanni',
    name: 'Electric Blue Johanni',
    category: 'Cichlids',
    scientificName: 'Melanochromis johanni',
    compatibility: compatibilityMatrix['malawian-cichlids'] || {},
    quickFacts: [
      'Striking electric blue males with aggressive nature',
      'Females are yellow-orange in colour',
      'Rocky substrate essential for natural behaviour',
      'Highly territorial mbuna species',
      'Requires hard alkaline water conditions',
      'Males can reach 10 cm in captivity',
      'Needs multiple caves and hiding spots',
      'Should be kept in species-specific setups',
      'Aggressive towards similar-coloured fish',
      'Endemic to Lake Malawi rocky shores'
    ],
    detailedInfo: {
      description: 'Electric Blue Johanni are stunning mbuna cichlids from Lake Malawi. Males develop brilliant electric blue colouration whilst females remain yellow-orange. They are highly aggressive and territorial, requiring carefully planned tank setups.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Highly Aggressive',
      diet: 'Herbivorous/Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'yellow-lab-cichlid',
    name: 'Yellow Lab Cichlid',
    category: 'Cichlids',
    scientificName: 'Labidochromis caeruleus',
    compatibility: compatibilityMatrix['malawian-cichlids'] || {},
    quickFacts: [
      'One of the most peaceful mbuna species',
      'Bright yellow colouration with black fins',
      'Excellent beginner African cichlid',
      'Less aggressive than most mbuna',
      'Can be kept with other peaceful mbuna',
      'Endemic to Lake Malawi rocky areas',
      'Omnivorous with algae-based diet needs',
      'Hardy and adaptable to various conditions',
      'Males develop longer fins and deeper colour',
      'Active swimmers requiring open swimming space'
    ],
    detailedInfo: {
      description: 'Yellow Lab Cichlids are among the most peaceful and beginner-friendly mbuna from Lake Malawi. Their bright yellow colouration and relatively calm temperament make them excellent choices for African cichlid communities.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Semi-Aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'red-zebra-cichlid',
    name: 'Red Zebra Cichlid',
    category: 'Cichlids',
    scientificName: 'Maylandia estherae',
    compatibility: compatibilityMatrix['malawian-cichlids'] || {},
    quickFacts: [
      'Popular orange-red mbuna with blue males',
      'Females are bright orange-red colour',
      'Males develop blue colouration with maturity',
      'Moderately aggressive mbuna species',
      'Requires rocky environment with caves',
      'Endemic to Lake Malawi Minos Reef',
      'Herbivorous diet prevents bloat issues',
      'Active algae grazers in the wild',
      'Can be bred successfully in captivity',
      'Needs hard alkaline water conditions'
    ],
    detailedInfo: {
      description: 'Red Zebra Cichlids are vibrant mbuna from Lake Malawi with distinctive sexual dimorphism. Females display bright orange-red colouration while mature males develop striking blue colours with darker barring.',
      size: '10-13 cm (4-5 inches)',
      temperament: 'Aggressive',
      diet: 'Herbivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'cobalt-blue-zebra',
    name: 'Cobalt Blue Zebra',
    category: 'Cichlids',
    scientificName: 'Maylandia callainos',
    compatibility: compatibilityMatrix['malawian-cichlids'] || {},
    quickFacts: [
      'Brilliant cobalt blue colouration in males',
      'Females remain pale blue or white',
      'Classic mbuna species from Lake Malawi',
      'Requires rocky substrate and caves',
      'Aggressive towards similar species',
      'Herbivorous diet essential for health',
      'Active algae scrapers in natural habitat',
      'Can hybridise with related Maylandia species',
      'Needs excellent water quality and filtration',
      'Popular in African cichlid communities'
    ],
    detailedInfo: {
      description: 'Cobalt Blue Zebras are classic Lake Malawi mbuna with stunning electric blue males and pale females. They are active, aggressive fish that require rocky environments and herbivorous diets to thrive.',
      size: '10-13 cm (4-5 inches)',
      temperament: 'Aggressive',
      diet: 'Herbivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'peacock-cichlid-aulonocara',
    name: 'Peacock Cichlid (Aulonocara)',
    category: 'Cichlids',
    scientificName: 'Aulonocara sp.',
    compatibility: compatibilityMatrix['malawian-cichlids'] || {},
    quickFacts: [
      'Stunning iridescent colours in multiple varieties',
      'Less aggressive than mbuna species',
      'Males develop brilliant breeding colours',
      'Require sandy substrate for natural behaviour',
      'Feed by sifting sand for invertebrates',
      'Peaceful compared to other Malawian cichlids',
      'Many colour varieties available in trade',
      'Endemic to deeper waters of Lake Malawi',
      'Sensitive to poor water quality',
      'Popular in show aquariums for colours'
    ],
    detailedInfo: {
      description: 'Peacock Cichlids are among the most colourful freshwater fish, with males displaying brilliant metallic blues, reds, and yellows. They are less aggressive than mbuna and prefer sandy substrates for their natural feeding behaviour.',
      size: '10-15 cm (4-6 inches)',
      temperament: 'Semi-Aggressive',
      diet: 'Carnivorous',
      tankSize: '227+ litres (60+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-15 years'
    }
  },

  // Tanganyikan Cichlids - Lake Tanganyika Species
  {
    id: 'frontosa-cichlid',
    name: 'Frontosa Cichlid',
    category: 'Cichlids',
    scientificName: 'Cyphotilapia frontosa',
    compatibility: compatibilityMatrix['tanganyikan-cichlids'] || {},
    quickFacts: [
      'Majestic large cichlid with prominent forehead hump',
      'Distinctive black vertical stripes on blue-white body',
      'Slow-growing species reaching large adult size',
      'Relatively peaceful for their size',
      'Endemic to deeper waters of Lake Tanganyika',
      'Requires large tank due to adult size',
      'Males develop larger nuchal hump',
      'Long-lived species with 15+ year lifespan',
      'Carnivorous diet with high protein needs',
      'Prized by cichlid enthusiasts for stately appearance'
    ],
    detailedInfo: {
      description: 'Frontosa Cichlids are the kings of Lake Tanganyika, growing into magnificent fish with distinctive nuchal humps and striking black stripes. They are relatively peaceful giants that require large tanks and excellent water quality.',
      size: '30-35 cm (12-14 inches)',
      temperament: 'Semi-Aggressive',
      diet: 'Carnivorous',
      tankSize: '568+ litres (150+ gallons)',
      waterParams: {
        temperature: '24-26°C (75-79°F)',
        ph: '8.0-9.0',
        hardness: '12-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15-25 years'
    }
  },
  {
    id: 'tropheus-cichlid',
    name: 'Tropheus Cichlid',
    category: 'Cichlids',
    scientificName: 'Tropheus sp.',
    compatibility: compatibilityMatrix['tanganyikan-cichlids'] || {},
    quickFacts: [
      'Highly aggressive and territorial mbuna-like cichlids',
      'Stunning colour varieties from different lake locations',
      'Require large groups to spread aggression',
      'Strictly herbivorous diet essential',
      'Very sensitive to water quality changes',
      'Endemic to rocky shores of Lake Tanganyika',
      'Cannot be mixed with different Tropheus varieties',
      'Require expert care and maintenance',
      'Males develop more intense breeding colours',
      'Popular with advanced African cichlid keepers'
    ],
    detailedInfo: {
      description: 'Tropheus Cichlids are among the most challenging and rewarding African cichlids, displaying incredible colour variations depending on their lake origin. They require expert care, large groups, and pristine water conditions.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Highly Aggressive',
      diet: 'Herbivorous',
      tankSize: '454+ litres (120+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-81°F)',
        ph: '8.0-9.0',
        hardness: '12-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'shell-dweller-cichlid',
    name: 'Shell Dweller Cichlid',
    category: 'Cichlids',
    scientificName: 'Lamprologus sp.',
    compatibility: compatibilityMatrix['tanganyikan-cichlids'] || {},
    quickFacts: [
      'Tiny cichlids that live in empty snail shells',
      'Multiple species available in the hobby',
      'Require sandy substrate and empty shells',
      'Form fascinating shell-based territories',
      'Can be kept in smaller tanks than other Tanganyikans',
      'Males defend territories of multiple shells',
      'Females care for young within shells',
      'Endemic to sandy areas of Lake Tanganyika',
      'Peaceful towards non-competing species',
      'Interesting breeding behaviours to observe'
    ],
    detailedInfo: {
      description: 'Shell Dweller Cichlids are fascinating tiny Lake Tanganyika cichlids that have evolved to live exclusively in empty snail shells. They create complex social structures around shell territories and display remarkable parental care.',
      size: '3-5 cm (1-2 inches)',
      temperament: 'Peaceful',
      diet: 'Carnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-81°F)',
        ph: '8.0-9.0',
        hardness: '12-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'calvus-cichlid',
    name: 'Calvus Cichlid',
    category: 'Cichlids',
    scientificName: 'Altolamprologus calvus',
    compatibility: compatibilityMatrix['tanganyikan-cichlids'] || {},
    quickFacts: [
      'Compressed body shape for navigating rock crevices',
      'Ambush predator with patient hunting style',
      'Multiple colour varieties from different locations',
      'Requires rocky environment with tight spaces',
      'Slow-growing species taking 2+ years to mature',
      'Males develop longer fins and larger size',
      'Endemic to rocky shores of Lake Tanganyika',
      'Carnivorous diet with live and frozen foods',
      'Peaceful towards fish too large to eat',
      'Prized for unique body shape and colours'
    ],
    detailedInfo: {
      description: 'Calvus Cichlids are uniquely adapted Lake Tanganyika cichlids with laterally compressed bodies perfect for navigating rock crevices. They are patient ambush predators with beautiful colour variations.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Semi-Aggressive',
      diet: 'Carnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-27°C (75-81°F)',
        ph: '8.0-9.0',
        hardness: '12-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },

  // Other African Cichlids - West African and Other Species
  {
    id: 'kribensis-cichlid',
    name: 'Kribensis Cichlid',
    category: 'Cichlids',
    scientificName: 'Pelvicachromis pulcher',
    compatibility: compatibilityMatrix['misc-african-cichlids'] || {},
    quickFacts: [
      'Colourful West African dwarf cichlid',
      'Peaceful compared to rift lake species',
      'Beautiful purple and red breeding colours',
      'Excellent parents with strong pair bonds',
      'Can be kept in community tanks',
      'Prefers soft to moderately hard water',
      'Cave spawner requiring hiding places',
      'Males larger with extended fins',
      'Endemic to Nigeria and Cameroon rivers',
      'Popular beginner African cichlid'
    ],
    detailedInfo: {
      description: 'Kribensis Cichlids are beautiful West African dwarf cichlids known for their peaceful nature and stunning breeding colours. They form strong pair bonds and are excellent parents, making them ideal for community tanks.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-26°C (75-79°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'jewel-cichlid',
    name: 'Jewel Cichlid',
    category: 'Cichlids',
    scientificName: 'Hemichromis bimaculatus',
    compatibility: compatibilityMatrix['misc-african-cichlids'] || {},
    quickFacts: [
      'Brilliant red colouration with iridescent spots',
      'Highly aggressive and territorial',
      'Excellent parents with fierce protection instincts',
      'Can become extremely aggressive when breeding',
      'Requires robust tank mates or species setup',
      'Endemic to West African river systems',
      'Adaptable to various water conditions',
      'Males develop more intense colours',
      'May dig and rearrange tank decorations',
      'Beautiful but challenging species to keep'
    ],
    detailedInfo: {
      description: 'Jewel Cichlids are stunning West African cichlids with brilliant red colouration and iridescent blue-green spots. While beautiful, they are highly aggressive and require careful tank mate selection.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Highly Aggressive',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-7.5',
        hardness: '8-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'egyptian-mouthbrooder',
    name: 'Egyptian Mouthbrooder',
    category: 'Cichlids',
    scientificName: 'Pseudocrenilabrus multicolor',
    compatibility: compatibilityMatrix['misc-african-cichlids'] || {},
    quickFacts: [
      'Small colourful African mouthbrooding cichlid',
      'Males develop brilliant breeding colours',
      'Peaceful towards most other fish',
      'Easy to breed with fascinating mouth-brooding',
      'Adaptable to various water conditions',
      'Endemic to Nile River system and East Africa',
      'Can be kept in community tanks',
      'Males more colourful than females',
      'Hardy and suitable for beginners',
      'Active swimmers requiring open space'
    ],
    detailedInfo: {
      description: 'Egyptian Mouthbrooders are small, colourful African cichlids from the Nile River system. They are peaceful, hardy fish that display fascinating mouthbrooding behaviour and beautiful breeding colours.',
      size: '6-8 cm (2-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '7.0-8.5',
        hardness: '10-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'butterfly-cichlid',
    name: 'Butterfly Cichlid',
    category: 'Cichlids',
    scientificName: 'Anomalochromis thomasi',
    compatibility: compatibilityMatrix['misc-african-cichlids'] || {},
    quickFacts: [
      'Peaceful West African dwarf cichlid',
      'Beautiful subtle colouration and patterns',
      'Excellent community fish with non-aggressive nature',
      'Forms strong pair bonds for breeding',
      'Substrate spawner with parental care',
      'Endemic to Guinea and Sierra Leone',
      'Prefers soft, slightly acidic water',
      'Males develop extended fins and brighter colours',
      'Hardy and adaptable to aquarium conditions',
      'Ideal beginner African cichlid species'
    ],
    detailedInfo: {
      description: 'Butterfly Cichlids are peaceful West African dwarf cichlids with subtle beauty and excellent temperaments. They are ideal for community tanks and beginning African cichlid keepers due to their peaceful nature.',
      size: '6-8 cm (2-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },

  // Angelfish - All Species and Popular Varieties
  {
    id: 'silver-angelfish',
    name: 'Silver Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Classic wild-type angelfish colouration',
      'Most common and hardy angelfish variety',
      'Silver body with dark vertical stripes',
      'Peaceful community fish when not breeding',
      'Forms monogamous pairs for life',
      'Requires tall tanks due to body shape',
      'Can live 10+ years with proper care',
      'Native to Amazon River basin',
      'Excellent parents when breeding',
      'Adaptable to various water conditions'
    ],
    detailedInfo: {
      description: 'Silver Angelfish are the classic wild-type angelfish with silver bodies and distinctive dark vertical stripes. They are the most common and hardy variety, making them excellent choices for beginners and community tanks.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'altum-angelfish',
    name: 'Altum Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum altum',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Largest and most impressive angelfish species',
      'Wild-caught specimens preferred over tank-bred',
      'Distinctive red spots on fins and body',
      'Requires excellent water quality and stability',
      'More challenging than common angelfish',
      'Native to Orinoco River basin in Venezuela',
      'Can reach 18+ cm in height',
      'Sensitive to water parameter changes',
      'Commands premium prices in the hobby',
      'Considered the holy grail of angelfish'
    ],
    detailedInfo: {
      description: 'Altum Angelfish are the largest and most magnificent angelfish species, native to the Orinoco River basin. They are more challenging to keep than common angelfish and require pristine water conditions and expert care.',
      size: '18+ cm (7+ inches) tall, 15 cm (6 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '300+ litres (80+ gallons)',
      waterParams: {
        temperature: '26-30°C (79-86°F)',
        ph: '4.5-6.5',
        hardness: '1-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'leopoldi-angelfish',
    name: 'Leopoldi Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum leopoldi',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Smallest of the three angelfish species',
      'More rounded body shape than other species',
      'Distinctive spotted pattern on body',
      'Less common in the aquarium trade',
      'More aggressive than scalare angelfish',
      'Native to Amazon and Essequibo rivers',
      'Often confused with juvenile altum',
      'Requires soft, acidic water conditions',
      'Challenging to breed in captivity',
      'Prized by angelfish enthusiasts'
    ],
    detailedInfo: {
      description: 'Leopoldi Angelfish are the smallest and least common of the three angelfish species. They have a more rounded body shape and distinctive spotted patterns, making them unique among angelfish species.',
      size: '10 cm (4 inches) tall, 8 cm (3 inches) long',
      temperament: 'Semi-Aggressive',
      diet: 'Omnivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.5-6.8',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'zebra-angelfish',
    name: 'Zebra Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Extra dark vertical stripes on silver body',
      'One of the most popular angelfish varieties',
      'Selective breeding enhanced stripe pattern',
      'Hardy and adaptable like silver angelfish',
      'Excellent for community tanks',
      'Stripes may fade with age or stress',
      'Easy to breed and raise',
      'Compatible with other angelfish varieties',
      'Active swimmers requiring vertical space',
      'Peaceful temperament when well-fed'
    ],
    detailedInfo: {
      description: 'Zebra Angelfish are a popular variety of Pterophyllum scalare with enhanced dark vertical stripes on a silver body. They share the hardiness of silver angelfish while displaying more dramatic striping patterns.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'marble-angelfish',
    name: 'Marble Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Beautiful marbled black and silver pattern',
      'Each fish has unique individual markings',
      'Pattern can change and evolve with age',
      'Hardy variety suitable for beginners',
      'Popular in the aquarium trade',
      'Excellent parents and community fish',
      'Pattern intensity varies between individuals',
      'Compatible with other angelfish varieties',
      'Easy to breed with interesting genetics',
      'Peaceful temperament in proper conditions'
    ],
    detailedInfo: {
      description: 'Marble Angelfish display beautiful marbled patterns of black and silver markings that are unique to each individual. Their patterns can change and evolve as they mature, making them fascinating to observe over time.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'gold-angelfish',
    name: 'Gold Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Beautiful golden-yellow body colouration',
      'Lacks the dark pigmentation of wild types',
      'Peaceful and hardy like other scalare varieties',
      'Popular choice for planted aquariums',
      'Golden colour can vary in intensity',
      'Excellent breeding variety',
      'May show faint striping under stress',
      'Compatible with other angelfish types',
      'Stands out beautifully in community tanks',
      'Relatively easy to maintain and breed'
    ],
    detailedInfo: {
      description: 'Gold Angelfish are stunning varieties with golden-yellow bodies that lack the dark pigmentation of wild-type angelfish. They are peaceful, hardy fish that add brilliant colour to community aquariums.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'black-angelfish',
    name: 'Black Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Dramatic all-black or very dark colouration',
      'Striking appearance in planted tanks',
      'Hardy variety suitable for beginners',
      'Black colour can fade under poor conditions',
      'Excellent contrast with lighter fish',
      'Popular breeding variety',
      'Peaceful community fish temperament',
      'May show lighter patches when stressed',
      'Easy to care for like other scalare',
      'Beautiful when kept in groups'
    ],
    detailedInfo: {
      description: 'Black Angelfish are dramatic varieties with deep black or very dark colouration throughout their bodies and fins. They create stunning visual contrast in planted aquariums and community tanks.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'veil-angelfish',
    name: 'Veil Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Dramatically elongated flowing fins',
      'Available in multiple colour varieties',
      'More delicate than standard fin angelfish',
      'Requires excellent water quality',
      'Fins can be damaged by aggressive tank mates',
      'Popular show variety among angelfish',
      'Swimming ability slightly reduced',
      'Breeding can be more challenging',
      'Stunning appearance in display tanks',
      'Needs careful tank mate selection'
    ],
    detailedInfo: {
      description: 'Veil Angelfish are characterised by their dramatically elongated, flowing fins that create a graceful, ethereal appearance. They require excellent water quality and careful tank mate selection to prevent fin damage.',
      size: '15 cm (6 inches) tall, 18+ cm (7+ inches) including fins',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'platinum-angelfish',
    name: 'Platinum Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Brilliant white or pale silver colouration',
      'Lacks most pigmentation genes',
      'Stunning appearance in any aquarium setup',
      'Hardy variety despite pale colouration',
      'Popular for breeding programmes',
      'May show faint markings under certain lighting',
      'Peaceful community fish temperament',
      'Excellent contrast with darker fish',
      'Easy to care for like other scalare',
      'Commands higher prices than common varieties'
    ],
    detailedInfo: {
      description: 'Platinum Angelfish are brilliant white or pale silver varieties that lack most pigmentation. They create stunning visual impact in aquariums and are prized for their pristine, clean appearance.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'koi-angelfish',
    name: 'Koi Angelfish',
    category: 'Angelfish',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Orange and white patches resembling koi carp',
      'Each fish has unique colour patterns',
      'Relatively new variety in the hobby',
      'Pattern can change and develop with age',
      'Hardy like other scalare varieties',
      'Popular among angelfish collectors',
      'Peaceful community fish temperament',
      'Excellent breeding potential',
      'Striking appearance in planted tanks',
      'Compatible with other angelfish varieties'
    ],
    detailedInfo: {
      description: 'Koi Angelfish are a newer variety featuring orange and white patches that resemble the patterns of koi carp. Each individual has unique markings that can develop and change as they mature.',
      size: '15 cm (6 inches) tall, 13 cm (5 inches) long',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-12 years'
    }
  },

  // Barbs - All Popular Species and Varieties
  {
    id: 'tiger-barb',
    name: 'Tiger Barb',
    category: 'Barbs',
    scientificName: 'Puntigrus tetrazona',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Most popular barb species with striking stripes',
      'Active schooling fish requiring groups of 6+',
      'Can be fin nippers with slow-moving fish',
      'Hardy and adaptable to various conditions',
      'Multiple colour varieties available',
      'Native to Southeast Asian waters',
      'Excellent community fish when properly managed',
      'Active swimmers requiring horizontal space',
      'Easy to breed in captivity',
      'Peaceful when kept in adequate numbers'
    ],
    detailedInfo: {
      description: 'Tiger Barbs are the most recognizable barb species with their distinctive black vertical stripes on a golden body. They are active schooling fish that require groups of six or more to display natural behaviour and reduce aggression.',
      size: '7 cm (3 inches)',
      temperament: 'Semi-Aggressive',
      diet: 'Omnivorous',
      tankSize: '113+ litres (30+ gallons)',
      waterParams: {
        temperature: '20-26°C (68-79°F)',
        ph: '6.0-8.0',
        hardness: '5-19 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '6-7 years'
    }
  },
  {
    id: 'cherry-barb',
    name: 'Cherry Barb',
    category: 'Barbs',
    scientificName: 'Puntius titteya',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Peaceful barb ideal for community tanks',
      'Males develop brilliant red breeding colours',
      'Less aggressive than most other barb species',
      'Endemic to Sri Lanka hill streams',
      'Excellent beginner fish',
      'Small size suitable for smaller aquariums',
      'Active schooling behaviour in groups',
      'Hardy and disease-resistant',
      'Easy to breed with proper conditions',
      'Compatible with peaceful community fish'
    ],
    detailedInfo: {
      description: 'Cherry Barbs are peaceful, small barbs from Sri Lanka that make excellent community fish. Males develop stunning red colouration during breeding season, while females remain more subdued golden-brown.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '5-19 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'rosy-barb',
    name: 'Rosy Barb',
    category: 'Barbs',
    scientificName: 'Pethia conchonius',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Hardy barb tolerating cooler temperatures',
      'Males develop bright red-pink breeding colours',
      'Active swimmers requiring spacious tanks',
      'Native to northern India and Bangladesh',
      'Can tolerate unheated aquariums',
      'Peaceful when kept in proper groups',
      'Long-finned varieties available',
      'Excellent for beginner aquarists',
      'Easy to breed with seasonal temperature drops',
      'Compatible with goldfish and other cool-water fish'
    ],
    detailedInfo: {
      description: 'Rosy Barbs are hardy, adaptable fish from northern India that can tolerate cooler temperatures than most tropical fish. Males develop beautiful rosy-pink colouration during breeding season.',
      size: '8 cm (3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '113+ litres (30+ gallons)',
      waterParams: {
        temperature: '16-22°C (61-72°F)',
        ph: '6.0-8.0',
        hardness: '5-19 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'tinfoil-barb',
    name: 'Tinfoil Barb',
    category: 'Barbs',
    scientificName: 'Barbonymus schwanenfeldii',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Large active barb reaching 35+ cm in aquariums',
      'Requires very large tanks due to adult size',
      'Peaceful despite large size',
      'Excellent jumpers requiring secure lids',
      'Native to Southeast Asian river systems',
      'Active schooling fish in large groups',
      'Fast swimmers requiring horizontal space',
      'Hardy once established in proper conditions',
      'May eat small tank mates when adult',
      'Popular in large display aquariums'
    ],
    detailedInfo: {
      description: 'Tinfoil Barbs are large, active schooling fish that require very spacious aquariums. Despite their size, they are generally peaceful but may eat very small tank mates. They are excellent jumpers requiring secure tank covers.',
      size: '25-35 cm (10-14 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '568+ litres (150+ gallons)',
      waterParams: {
        temperature: '22-25°C (72-77°F)',
        ph: '6.0-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'gold-barb',
    name: 'Gold Barb',
    category: 'Barbs',
    scientificName: 'Barbodes semifasciolatus',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Hardy golden-coloured barb ideal for beginners',
      'Peaceful temperament suitable for community tanks',
      'Originally from China and Vietnam',
      'Tolerates wide range of water conditions',
      'Active schooling fish requiring groups',
      'Males develop breeding tubercles on snout',
      'Excellent for unheated aquariums',
      'Easy to breed with temperature manipulation',
      'Long-lived compared to other small barbs',
      'Compatible with goldfish and cool-water species'
    ],
    detailedInfo: {
      description: 'Gold Barbs are hardy, peaceful fish from East Asia that make excellent community aquarium inhabitants. They tolerate cooler temperatures and are ideal for beginners due to their adaptable nature.',
      size: '7 cm (3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '113+ litres (30+ gallons)',
      waterParams: {
        temperature: '18-24°C (64-75°F)',
        ph: '6.0-8.0',
        hardness: '5-19 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'denison-barb',
    name: 'Denison Barb',
    category: 'Barbs',
    scientificName: 'Sahyadria denisonii',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Stunning torpedo-shaped barb with red stripe',
      'Fast swimmer requiring large aquariums',
      'Endemic to Western Ghats of India',
      'Peaceful schooling fish despite size',
      'Commands premium prices in the hobby',
      'Requires excellent water quality',
      'Active throughout all water levels',
      'Sensitive to poor water conditions',
      'Popular in large display aquariums',
      'Excellent jumpers needing secure lids'
    ],
    detailedInfo: {
      description: 'Denison Barbs are stunning fish with torpedo-shaped bodies and distinctive red stripes. They are endemic to India\'s Western Ghats and require large aquariums with excellent water quality. They are peaceful but very active swimmers.',
      size: '11-15 cm (4-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '208+ litres (55+ gallons)',
      waterParams: {
        temperature: '22-25°C (72-77°F)',
        ph: '6.8-7.8',
        hardness: '5-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-15 years'
    }
  },
  {
    id: 'black-ruby-barb',
    name: 'Black Ruby Barb',
    category: 'Barbs',
    scientificName: 'Pethia nigrofasciata',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Males develop striking black and red breeding colours',
      'Peaceful barb ideal for community aquariums',
      'Endemic to Sri Lankan hill streams',
      'Beautiful colour changes during breeding',
      'Smaller size suitable for medium aquariums',
      'Active schooling behaviour in groups',
      'Hardy and disease-resistant',
      'Easy to breed with proper setup',
      'Less aggressive than tiger barbs',
      'Popular among aquarists for colours'
    ],
    detailedInfo: {
      description: 'Black Ruby Barbs are beautiful Sri Lankan fish where males develop stunning black bodies with bright red fins during breeding season. They are peaceful, hardy fish ideal for community aquariums.',
      size: '6 cm (2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '5-12 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'checkerboard-barb',
    name: 'Checkerboard Barb',
    category: 'Barbs',
    scientificName: 'Oliotius oligolepis',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Small peaceful barb with distinctive pattern',
      'Excellent for nano and smaller community tanks',
      'Native to Sumatra and Indonesian waters',
      'Less common in the aquarium trade',
      'Peaceful temperament unlike many barbs',
      'Beautiful checkerboard scale pattern',
      'Active schooling fish requiring groups',
      'Hardy once established in aquarium',
      'Easy to maintain and care for',
      'Compatible with other peaceful small fish'
    ],
    detailedInfo: {
      description: 'Checkerboard Barbs are small, peaceful fish from Indonesia with distinctive checkerboard patterns on their scales. They are ideal for smaller aquariums and peaceful community setups.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.5',
        hardness: '5-12 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'pentazona-barb',
    name: 'Pentazona Barb',
    category: 'Barbs',
    scientificName: 'Desmopuntius pentazona',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Five-banded barb similar to tiger barb',
      'More peaceful than tiger barbs',
      'Native to Southeast Asian blackwater streams',
      'Distinctive five vertical black bands',
      'Excellent for planted community aquariums',
      'Active schooling fish requiring groups',
      'Hardy and adaptable to aquarium conditions',
      'Less fin-nipping behaviour than tiger barbs',
      'Beautiful in biotope setups',
      'Popular alternative to tiger barbs'
    ],
    detailedInfo: {
      description: 'Pentazona Barbs are attractive five-banded fish from Southeast Asia that are more peaceful than their tiger barb relatives. They prefer soft, slightly acidic water and are excellent for planted community aquariums.',
      size: '5 cm (2 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '5.5-6.8',
        hardness: '2-10 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'odessa-barb',
    name: 'Odessa Barb',
    category: 'Barbs',
    scientificName: 'Pethia padamya',
    compatibility: compatibilityMatrix['barbs'] || {},
    quickFacts: [
      'Stunning barb with bright red horizontal stripe',
      'Males develop intense breeding colouration',
      'Originally discovered in Myanmar',
      'Peaceful temperament for community tanks',
      'Beautiful addition to planted aquariums',
      'Active schooling fish requiring groups',
      'Hardy and easy to maintain',
      'Less aggressive than tiger barbs',
      'Excellent breeding species',
      'Popular for its vibrant colours'
    ],
    detailedInfo: {
      description: 'Odessa Barbs are stunning fish from Myanmar where males develop brilliant red horizontal stripes with black spots. They are peaceful, hardy fish that make excellent additions to community aquariums.',
      size: '6 cm (2.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '20-25°C (68-77°F)',
        ph: '6.0-7.0',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '3-5 years'
    }
  },

  // South American Cichlids
  {
    id: 'oscar-cichlid',
    name: 'Oscar Cichlid',
    category: 'Cichlids',
    scientificName: 'Astronotus ocellatus',
    compatibility: compatibilityMatrix['oscar-cichlid'] || {},
    quickFacts: [
      'Large, intelligent South American cichlid',
      'Can grow up to 35 cm (14 inches)',
      'Extremely personable and interactive with owners',
      'Requires very large aquarium (300+ litres)',
      'Messy eater that produces significant waste',
      'Lives 12-15 years with proper care',
      'Needs powerful filtration system',
      'Can be trained to do simple tricks',
      'Aggressive towards smaller fish',
      'Popular "pet fish" due to intelligence'
    ],
    detailedInfo: {
      description: 'Oscars are among the most intelligent and interactive freshwater fish. Large, robust cichlids from South America that develop strong bonds with their owners and can live for many years.',
      size: '25-35 cm (10-14 inches)',
      temperament: 'Aggressive',
      diet: 'Omnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '24-29°C (75-84°F)',
        ph: '6.0-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '12-15 years'
    }
  },
  {
    id: 'discus-symphysodon',
    name: 'Discus',
    category: 'Cichlids',
    scientificName: 'Symphysodon aequifasciatus',
    compatibility: compatibilityMatrix['discus-symphysodon'] || {},
    quickFacts: [
      'King of the aquarium - stunning circular body',
      'Requires pristine water conditions and high temperature',
      'Peaceful temperament despite being cichlids',
      'Forms strong pair bonds and excellent parents',
      'Feeds young with skin secretions (discus milk)',
      'Many captive-bred colour varieties available',
      'Sensitive to water quality changes',
      'Social fish that prefer groups of 6+',
      'Expensive and considered advanced species',
      'Native to Amazon River basin'
    ],
    detailedInfo: {
      description: 'Discus are considered the kings of freshwater aquariums. Their stunning circular bodies and peaceful nature make them highly sought after, though they require expert care and pristine conditions.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '28-32°C (82-90°F)',
        ph: '6.0-7.0',
        hardness: '1-8 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'convict-cichlid',
    name: 'Convict Cichlid',
    category: 'Cichlids',
    scientificName: 'Amatitlania nigrofasciata',
    compatibility: compatibilityMatrix['convict-cichlid'] || {},
    quickFacts: [
      'Hardy and aggressive Central American cichlid',
      'Black and white striped pattern like convict uniform',
      'Extremely prolific breeders',
      'Very territorial especially when breeding',
      'Can tolerate wide range of water conditions',
      'Excellent parents that defend fry aggressively',
      'Relatively small for a Central American cichlid',
      'Beginners cichlid due to hardiness',
      'Will eat smaller tank mates',
      'Forms strong monogamous pairs'
    ],
    detailedInfo: {
      description: 'Convict Cichlids are hardy, aggressive fish named for their prison stripe pattern. Despite their aggression, they make excellent beginner cichlids due to their adaptability and interesting breeding behavior.',
      size: '10-15 cm (4-6 inches)',
      temperament: 'Aggressive',
      diet: 'Omnivorous',
      tankSize: '114+ litres (30+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.5-8.0',
        hardness: '8-25 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'firemouth-cichlid',
    name: 'Firemouth Cichlid',
    category: 'Cichlids',
    scientificName: 'Thorichthys meeki',
    compatibility: compatibilityMatrix['firemouth-cichlid'] || {},
    quickFacts: [
      'Stunning red throat and belly coloration',
      'Peaceful for a Central American cichlid',
      'Males develop impressive red breeding colors',
      'Good community cichlid with proper tank mates',
      'Excellent parents that care for young',
      'Less aggressive than most Central Americans',
      'Beautiful flowing fins with red edges',
      'Native to rivers of Mexico and Guatemala',
      'Hardy and adaptable to various conditions',
      'Popular in Central American biotope tanks'
    ],
    detailedInfo: {
      description: 'Firemouth Cichlids are among the most beautiful and peaceful Central American cichlids. Their stunning red throat coloration and relatively calm demeanor make them excellent community fish.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Semi-aggressive',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-8.0',
        hardness: '8-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'severum-cichlid',
    name: 'Severum',
    category: 'Cichlids',
    scientificName: 'Heros severus',
    compatibility: compatibilityMatrix['severum-cichlid'] || {},
    quickFacts: [
      'Peaceful large South American cichlid',
      'Beautiful gold and green coloration',
      'Nicknamed "Poor Mans Discus" for similar shape',
      'Much hardier and easier to care for than Discus',
      'Forms pairs and excellent breeding behavior',
      'Can be kept with other peaceful large fish',
      'Herbivorous diet with some protein',
      'Long-lived species with proper care',
      'Several color varieties available',
      'Native to Amazon and Orinoco river basins'
    ],
    detailedInfo: {
      description: 'Severums are peaceful, hardy cichlids often called "Poor Mans Discus" for their similar body shape but much easier care requirements. They make excellent centerpiece fish for large community tanks.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'jack-dempsey-cichlid',
    name: 'Jack Dempsey Cichlid',
    category: 'Cichlids',
    scientificName: 'Rocio octofasciata',
    compatibility: compatibilityMatrix['jack-dempsey-cichlid'] || {},
    quickFacts: [
      'Named after famous boxer for aggressive nature',
      'Stunning iridescent blue and gold spangling',
      'Moderately aggressive Central American cichlid',
      'Intelligent and can recognize owners',
      'Beautiful electric blue variety available',
      'Good parents that defend territory fiercely',
      'Requires large tank due to size and aggression',
      'Lives long time with proper care',
      'Can be kept with other large robust fish',
      'Popular in Central American biotope setups'
    ],
    detailedInfo: {
      description: 'Jack Dempsey Cichlids are named after the famous boxer for their aggressive nature. They feature beautiful iridescent blue and gold patterns and are intelligent, long-lived fish.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Aggressive',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-8.0',
        hardness: '8-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'texas-cichlid',
    name: 'Texas Cichlid',
    category: 'Cichlids',
    scientificName: 'Herichthys cyanoguttatus',
    compatibility: compatibilityMatrix['texas-cichlid'] || {},
    quickFacts: [
      'Only cichlid native to United States',
      'Extremely aggressive and territorial',
      'Beautiful pearl-spotted pattern when mature',
      'Can tolerate cooler temperatures than tropical cichlids',
      'Excellent parents but very protective of young',
      'Will eat any fish that fits in mouth',
      'Requires large tank and robust tank mates',
      'Males develop prominent nuchal hump',
      'Popular in Texas and southwestern United States',
      'Hardy and adaptable to various conditions'
    ],
    detailedInfo: {
      description: 'Texas Cichlids are the only cichlid species native to the United States. They are extremely aggressive but beautiful fish with pearl spotting and the ability to tolerate cooler temperatures.',
      size: '20-30 cm (8-12 inches)',
      temperament: 'Very Aggressive',
      diet: 'Omnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '20-28°C (68-82°F)',
        ph: '6.5-8.5',
        hardness: '8-25 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'blood-parrot-cichlid',
    name: 'Blood Parrot Cichlid',
    category: 'Cichlids',
    scientificName: 'Hybrid (Various Amphilophus species)',
    compatibility: compatibilityMatrix['blood-parrot-cichlid'] || {},
    quickFacts: [
      'Artificial hybrid cichlid with unique appearance',
      'Bright orange-red coloration',
      'Peaceful temperament despite large size',
      'Deformed mouth makes feeding challenging',
      'Cannot breed naturally due to hybrid sterility',
      'Very hardy and long-lived',
      'Controversial fish due to artificial creation',
      'Popular for bright colors and calm nature',
      'Requires specialized diet due to mouth shape',
      'Often kept in community tanks with other large fish'
    ],
    detailedInfo: {
      description: 'Blood Parrot Cichlids are controversial hybrid fish created by crossing different Central American cichlid species. Despite ethical concerns, they are popular for their bright orange color and peaceful nature.',
      size: '15-20 cm (6-8 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'german-blue-ram',
    name: 'German Blue Ram',
    category: 'Cichlids',
    scientificName: 'Mikrogeophagus ramirezi',
    compatibility: compatibilityMatrix['german-blue-ram'] || {},
    quickFacts: [
      'Beautiful small South American dwarf cichlid',
      'Stunning blue and yellow coloration',
      'Peaceful temperament suitable for community tanks',
      'Requires warm water (26-30°C minimum)',
      'Forms monogamous pairs and excellent parents',
      'Sensitive to water quality changes',
      'Short lifespan of 2-3 years typically',
      'Many captive-bred color varieties available',
      'Good tank mates for other peaceful fish',
      'Native to Orinoco River basin in Venezuela/Colombia'
    ],
    detailedInfo: {
      description: 'German Blue Rams are stunning dwarf cichlids with brilliant blue and yellow colors. Despite their beauty and peaceful nature, they require warm water and stable conditions to thrive.',
      size: '5-7 cm (2-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '2-3 years'
    }
  },
  {
    id: 'bolivian-ram',
    name: 'Bolivian Ram',
    category: 'Cichlids',
    scientificName: 'Mikrogeophagus altispinosus',
    compatibility: compatibilityMatrix['bolivian-ram'] || {},
    quickFacts: [
      'Hardy dwarf cichlid from South America',
      'More tolerant of cooler water than German Rams',
      'Peaceful temperament with beautiful coloration',
      'Yellow and orange body with black markings',
      'Longer-lived than German Blue Rams',
      'Excellent community fish for planted tanks',
      'Forms pairs but less aggressive when breeding',
      'Good beginner dwarf cichlid species',
      'Native to Bolivia and Brazil river systems',
      'Less sensitive to water parameters than German Rams'
    ],
    detailedInfo: {
      description: 'Bolivian Rams are hardier than their German cousins, with beautiful yellow and orange coloration. They make excellent community fish and are more forgiving of water parameter fluctuations.',
      size: '6-8 cm (2.5-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '4-6 years'
    }
  },
  {
    id: 'apistogramma-cacatuoides',
    name: 'Cockatoo Dwarf Cichlid',
    category: 'Cichlids',
    scientificName: 'Apistogramma cacatuoides',
    compatibility: compatibilityMatrix['apistogramma-cacatuoides'] || {},
    quickFacts: [
      'Beautiful dwarf cichlid with cockatoo-like crest',
      'Males develop spectacular fin extensions',
      'Peaceful temperament suitable for community tanks',
      'Forms harems with multiple females',
      'Requires soft, acidic water for breeding',
      'Cave spawner that needs hiding places',
      'Many color varieties and strains available',
      'Males much more colorful than females',
      'Native to Amazon River basin',
      'Popular in planted and biotope aquariums'
    ],
    detailedInfo: {
      description: 'Cockatoo Dwarf Cichlids are among the most popular Apistogramma species. Males develop stunning colors and fin extensions, especially during breeding season.',
      size: '6-8 cm (2.5-3 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.0',
        hardness: '2-8 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'apistogramma-agassizii',
    name: 'Agassiz Dwarf Cichlid',
    category: 'Cichlids',
    scientificName: 'Apistogramma agassizii',
    compatibility: compatibilityMatrix['apistogramma-agassizii'] || {},
    quickFacts: [
      'Classic Apistogramma with stunning colors',
      'Males have elaborate flowing fins',
      'Multiple geographic color forms available',
      'Peaceful harem-forming dwarf cichlid',
      'Requires soft, acidic blackwater conditions',
      'Cave spawner with excellent parental care',
      'Sensitive to water quality changes',
      'Popular in South American biotope tanks',
      'Named after famous ichthyologist Louis Agassiz',
      'One of the most sought-after dwarf cichlids'
    ],
    detailedInfo: {
      description: 'Agassiz Dwarf Cichlids are classic Apistogramma with incredible color variations depending on collection location. They require soft, acidic water and are prized by cichlid enthusiasts.',
      size: '6-9 cm (2.5-3.5 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '76+ litres (20+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '5.5-6.5',
        hardness: '1-5 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'blue-acara',
    name: 'Blue Acara',
    category: 'Cichlids',
    scientificName: 'Andinoacara pulcher',
    compatibility: compatibilityMatrix['blue-acara'] || {},
    quickFacts: [
      'Beautiful metallic blue and green coloration',
      'Peaceful temperament for a medium-sized cichlid',
      'Hardy and adaptable to various water conditions',
      'Forms monogamous pairs and excellent parents',
      'Good community fish with appropriate tank mates',
      'Males develop more intense coloration',
      'Native to northern South America',
      'Popular beginner to intermediate cichlid',
      'Can be bred successfully in captivity',
      'Lives long time with proper care'
    ],
    detailedInfo: {
      description: 'Blue Acaras are beautiful, peaceful cichlids with stunning metallic blue and green coloration. They make excellent community fish and are much easier to care for than many South American cichlids.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '151+ litres (40+ gallons)',
      waterParams: {
        temperature: '22-28°C (72-82°F)',
        ph: '6.0-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'green-terror',
    name: 'Green Terror',
    category: 'Cichlids',
    scientificName: 'Andinoacara rivulatus',
    compatibility: compatibilityMatrix['green-terror'] || {},
    quickFacts: [
      'Aggressive large South American cichlid',
      'Stunning metallic green and orange coloration',
      'Males develop prominent nuchal hump',
      'Requires large tank due to size and aggression',
      'Beautiful when mature but very territorial',
      'Good parents but extremely protective',
      'Can be kept with other large robust cichlids',
      'Native to Pacific coast of Ecuador and Peru',
      'Long-lived species with proper care',
      'Popular despite aggressive nature due to beauty'
    ],
    detailedInfo: {
      description: 'Green Terrors are stunning but aggressive South American cichlids. Males develop beautiful metallic green coloration with orange trim and prominent head humps.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Aggressive',
      diet: 'Omnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-78°F)',
        ph: '6.5-8.0',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'geophagus-surinamensis',
    name: 'Redhead Geophagus',
    category: 'Cichlids',
    scientificName: 'Geophagus surinamensis',
    compatibility: compatibilityMatrix['geophagus-surinamensis'] || {},
    quickFacts: [
      'Peaceful "earth eater" from South America',
      'Constantly sifts sand through gills for food',
      'Beautiful red coloration on head and fins',
      'Requires fine sand substrate for natural behavior',
      'Social fish that does well in groups',
      'Peaceful temperament despite large size',
      'Excellent community fish with appropriate mates',
      'Native to rivers of northern South America',
      'Long-lived species with proper care',
      'Popular in South American biotope tanks'
    ],
    detailedInfo: {
      description: 'Redhead Geophagus are peaceful "earth eating" cichlids that constantly sift sand for food. They require fine sand substrate and are excellent community fish despite their large size.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'uaru-cichlid',
    name: 'Uaru',
    category: 'Cichlids',
    scientificName: 'Uaru amphiacanthoides',
    compatibility: compatibilityMatrix['uaru-cichlid'] || {},
    quickFacts: [
      'Large peaceful South American cichlid',
      'Stunning triangular shape similar to angelfish',
      'Primarily herbivorous diet in nature',
      'Juveniles have different coloration than adults',
      'Forms groups and peaceful with other large fish',
      'Requires large tank due to adult size',
      'Excellent parents that produce skin secretions for fry',
      'Native to Amazon and Orinoco river basins',
      'Popular in large South American biotope tanks',
      'Long-lived species with proper care'
    ],
    detailedInfo: {
      description: 'Uarus are large, peaceful South American cichlids with a triangular body shape. They undergo dramatic color changes from juvenile to adult and are primarily herbivorous.',
      size: '25-30 cm (10-12 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '400+ litres (100+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'leopard-frog-pleco',
    name: 'Leopard Frog Pleco',
    category: 'Catfish',
    scientificName: 'Peckoltia compta',
    compatibility: compatibilityMatrix['leopard-frog-pleco'] || {},
    quickFacts: [
      'Small rare pleco with stunning leopard-like patterns',
      'Reaches only 8-10 cm (3-4 inches)',
      'Peaceful and excellent for smaller tanks',
      'Requires caves and hiding spots',
      'Sensitive to water quality',
      'Commands high prices due to rarity',
      'Wild-caught specimens are usually healthier',
      'Prefers soft, slightly acidic water',
      'More active at night',
      'Beautiful addition to biotope tanks'
    ],
    detailedInfo: {
      description: 'Leopard Frog Plecos are highly sought-after small plecos with intricate leopard-like patterns. Their beauty and rarity make them prized specimens for pleco enthusiasts.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'vampire-pleco',
    name: 'Vampire Pleco',
    category: 'Catfish',
    scientificName: 'Leporacanthicus heterodon',
    compatibility: compatibilityMatrix['vampire-pleco'] || {},
    quickFacts: [
      'Large, aggressive pleco with prominent teeth',
      'Black body with white spots and red fins',
      'Carnivorous - will eat smaller fish',
      'Requires large tank due to size and aggression',
      'Very expensive and rarely available',
      'Strong current and high oxygen requirements',
      'Excellent algae eater despite carnivorous nature',
      'Territorial towards other bottom dwellers',
      'Wild-caught specimens preferred',
      'Lives 15+ years with proper care'
    ],
    detailedInfo: {
      description: 'Vampire Plecos are large, impressive catfish with carnivorous habits. Their striking appearance and rarity make them holy grail fish for serious pleco collectors.',
      size: '25-30 cm (10-12 inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '400+ litres (100+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15+ years'
    }
  },
  {
    id: 'galaxy-pleco',
    name: 'Galaxy Pleco',
    category: 'Catfish',
    scientificName: 'Leporacanthicus galaxias',
    compatibility: compatibilityMatrix['galaxy-pleco'] || {},
    quickFacts: [
      'Stunning black pleco covered in white dots',
      'Extremely rare and expensive',
      'Aggressive territorial behavior',
      'Requires pristine water conditions',
      'Strong current and high oxygen needed',
      'Carnivorous diet with live/frozen foods',
      'One of the most beautiful plecos available',
      'Wild-caught only, no captive breeding success',
      'Commands thousands of dollars for specimens',
      'Ultimate goal fish for pleco enthusiasts'
    ],
    detailedInfo: {
      description: 'Galaxy Plecos are among the most beautiful and expensive catfish in the hobby. Their black body covered in white spots resembles a starry night sky.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15+ years'
    }
  },
  {
    id: 'snowball-pleco',
    name: 'Snowball Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus inspector',
    compatibility: compatibilityMatrix['snowball-pleco'] || {},
    quickFacts: [
      'Beautiful small pleco with white spots on dark body',
      'Peaceful temperament suitable for communities',
      'Reaches 15-17 cm (6-7 inches)',
      'Expensive but more available than galaxy plecos',
      'Requires caves and strong filtration',
      'Prefers protein-rich diet',
      'More active than many other plecos',
      'Captive breeding success increasing availability',
      'Popular among pleco collectors',
      'Hardy once established'
    ],
    detailedInfo: {
      description: 'Snowball Plecos are beautiful medium-sized plecos with distinctive white spots. More affordable than galaxy plecos but equally stunning in appearance.',
      size: '15-17 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '25-29°C (77-84°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'clown-pleco',
    name: 'Clown Pleco',
    category: 'Catfish',
    scientificName: 'Panaqolus maccus',
    compatibility: compatibilityMatrix['clown-pleco'] || {},
    quickFacts: [
      'Small colorful pleco with orange and black bands',
      'Only reaches 8-10 cm (3-4 inches)',
      'Perfect for smaller community tanks',
      'Primarily wood-eating diet',
      'Peaceful and active during day',
      'Requires driftwood in tank',
      'Easy to breed in captivity',
      'One of the most colorful small plecos',
      'Hardy and beginner-friendly',
      'Popular in planted tanks'
    ],
    detailedInfo: {
      description: 'Clown Plecos are small, colorful catfish perfect for community tanks. Their orange and black banding makes them one of the most attractive small plecos available.',
      size: '8-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-12 years'
    }
  },
  {
    id: 'sultan-pleco',
    name: 'Sultan Pleco',
    category: 'Catfish',
    scientificName: 'Leporacanthicus joselimai',
    compatibility: compatibilityMatrix['sultan-pleco'] || {},
    quickFacts: [
      'Large impressive pleco with golden spots',
      'Aggressive and territorial behavior',
      'Very expensive and rarely available',
      'Requires large tank and strong filtration',
      'Carnivorous with powerful jaws',
      'Wild-caught specimens only',
      'Beautiful golden coloration on dark body',
      'Can live 20+ years',
      'Prized by serious collectors',
      'Requires experienced keeper'
    ],
    detailedInfo: {
      description: 'Sultan Plecos are magnificent large catfish with golden spots. Their rarity and beauty make them among the most coveted plecos in the hobby.',
      size: '30-35 cm (12-14 inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '500+ litres (125+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '20+ years'
    }
  },
  {
    id: 'hemiancistrus-subviridis',
    name: 'Green Phantom Pleco',
    category: 'Catfish',
    scientificName: 'Hemiancistrus subviridis',
    compatibility: compatibilityMatrix['hemiancistrus-subviridis'] || {},
    quickFacts: [
      'Beautiful green coloration with yellow spots',
      'Medium-sized peaceful pleco',
      'More available than other rare plecos',
      'Excellent algae eater',
      'Requires caves and hiding spots',
      'Good community tank addition',
      'Captive breeding programs successful',
      'Hardy and adaptable',
      'Active during both day and night',
      'Popular with intermediate keepers'
    ],
    detailedInfo: {
      description: 'Green Phantom Plecos are attractive medium-sized catfish with green coloration and yellow spotting. More accessible than ultra-rare species while still being beautiful.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'sunshine-pleco',
    name: 'Sunshine Pleco',
    category: 'Catfish',
    scientificName: 'Scobinancistrus aureatus',
    compatibility: compatibilityMatrix['sunshine-pleco'] || {},
    quickFacts: [
      'Bright yellow-gold coloration',
      'Large size requires big tanks',
      'Aggressive towards other bottom dwellers',
      'Extremely expensive and rare',
      'Wild-caught specimens only',
      'Powerful algae eater',
      'Requires strong current and filtration',
      'Can live 15+ years',
      'One of the most colorful large plecos',
      'For experienced keepers only'
    ],
    detailedInfo: {
      description: 'Sunshine Plecos are stunning large catfish with brilliant yellow-gold coloration. Their size, aggression, and rarity make them challenging but rewarding fish.',
      size: '30-40 cm (12-16 inches)',
      temperament: 'Aggressive',
      diet: 'Omnivorous',
      tankSize: '500+ litres (125+ gallons)',
      waterParams: {
        temperature: '25-29°C (77-84°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15+ years'
    }
  },
  {
    id: 'red-lizard-whiptail',
    name: 'Red Lizard Whiptail',
    category: 'Catfish',
    scientificName: 'Rineloricaria sp. "Red"',
    compatibility: compatibilityMatrix['red-lizard-whiptail'] || {},
    quickFacts: [
      'Unique elongated body shape',
      'Beautiful red-orange coloration',
      'Peaceful and excellent for communities',
      'Primarily algae and biofilm feeder',
      'Requires sandy substrate',
      'Active during day and night',
      'Easy to breed in captivity',
      'Unusual swimming behavior',
      'Good glass cleaner',
      'Hardy and adaptable'
    ],
    detailedInfo: {
      description: 'Red Lizard Whiptails are unique catfish with elongated bodies and beautiful red coloration. Their peaceful nature makes them excellent community tank residents.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'royal-whiptail',
    name: 'Royal Whiptail',
    category: 'Catfish',
    scientificName: 'Sturisoma aureum',
    compatibility: compatibilityMatrix['royal-whiptail'] || {},
    quickFacts: [
      'Large impressive whiptail catfish',
      'Golden coloration with long filaments',
      'Peaceful despite large size',
      'Excellent algae and biofilm eater',
      'Requires large tank due to size',
      'Males develop breeding bristles',
      'Good parents with proper conditions',
      'Sensitive to water quality',
      'Beautiful addition to larger tanks',
      'Active and interesting behavior'
    ],
    detailedInfo: {
      description: 'Royal Whiptails are large, elegant catfish with golden coloration and impressive size. Despite their size, they remain peaceful and make excellent community fish.',
      size: '20-25 cm (8-10 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '300+ litres (75+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'panda-garra',
    name: 'Panda Garra',
    category: 'Catfish',
    scientificName: 'Garra flavatra',
    compatibility: compatibilityMatrix['panda-garra'] || {},
    quickFacts: [
      'Small algae eater with black and white patterns',
      'Peaceful and suitable for community tanks',
      'Excellent algae control',
      'Active and entertaining behavior',
      'Requires good water flow',
      'Hardy and beginner-friendly',
      'Good schooling behavior in groups',
      'Feeds on biofilm and algae',
      'Inexpensive and readily available',
      'Good alternative to Chinese algae eaters'
    ],
    detailedInfo: {
      description: 'Panda Garras are small, peaceful algae eaters with attractive black and white coloration. They are excellent for community tanks and provide natural algae control.',
      size: '7-10 cm (3-4 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '100+ litres (25+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '6-8 years'
    }
  },
  {
    id: 'zebra-oto',
    name: 'Zebra Otocinclus',
    category: 'Catfish',
    scientificName: 'Otocinclus cocama',
    compatibility: compatibilityMatrix['zebra-oto'] || {},
    quickFacts: [
      'Beautiful striped pattern unlike common otos',
      'Small peaceful algae eater',
      'Perfect for planted tanks',
      'Schooling fish - needs groups of 6+',
      'More sensitive than common otocinclus',
      'Excellent diatom algae control',
      'Peaceful with all tank mates',
      'Wild-caught specimens more common',
      'Requires stable water conditions',
      'Popular among planted tank enthusiasts'
    ],
    detailedInfo: {
      description: 'Zebra Otocinclus are beautiful small catfish with distinctive striped patterns. More sensitive than common otos but highly prized for their appearance and algae-eating abilities.',
      size: '4-5 cm (1.5-2 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '75+ litres (20+ gallons)',
      waterParams: {
        temperature: '22-26°C (72-79°F)',
        ph: '6.0-7.0',
        hardness: '2-10 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '3-5 years'
    }
  },
  {
    id: 'orange-seam-pleco',
    name: 'Orange Seam Pleco',
    category: 'Catfish',
    scientificName: 'Hemiancistrus guahiborum',
    compatibility: compatibilityMatrix['orange-seam-pleco'] || {},
    quickFacts: [
      'Dark body with bright orange fin edges',
      'Medium-sized peaceful pleco',
      'Excellent algae eater',
      'Requires caves and hiding spots',
      'More available than ultra-rare species',
      'Good community tank resident',
      'Active during evening hours',
      'Hardy and adaptable',
      'Captive breeding increasing availability',
      'Beautiful contrasting colors'
    ],
    detailedInfo: {
      description: 'Orange Seam Plecos are attractive medium-sized catfish with dark bodies and brilliant orange fin edges. They offer beauty without the extreme rarity of some plecos.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  },
  {
    id: 'blue-panaque',
    name: 'Blue Panaque',
    category: 'Catfish',
    scientificName: 'Panaque suttoni',
    compatibility: compatibilityMatrix['blue-panaque'] || {},
    quickFacts: [
      'Large impressive pleco with blue-grey coloration',
      'Reaches 45+ cm (18+ inches)',
      'Requires massive tank and filtration',
      'Powerful wood and algae eater',
      'Long-lived species (20+ years)',
      'Produces large amounts of waste',
      'Expensive and rarely available',
      'Peaceful despite large size',
      'Beautiful adult coloration',
      'For experienced large tank keepers only'
    ],
    detailedInfo: {
      description: 'Blue Panaques are massive catfish with beautiful blue-grey coloration. Their size and waste production make them suitable only for the largest aquarium systems.',
      size: '45+ cm (18+ inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '1000+ litres (250+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '20+ years'
    }
  },
  {
    id: 'chocolate-pleco',
    name: 'Chocolate Pleco',
    category: 'Catfish',
    scientificName: 'Pseudacanthicus sp. "Chocolate"',
    compatibility: compatibilityMatrix['chocolate-pleco'] || {},
    quickFacts: [
      'Beautiful brown chocolate coloration',
      'Large aggressive pleco species',
      'Requires large tank and strong filtration',
      'Carnivorous diet with meaty foods',
      'Expensive and rarely available',
      'Wild-caught specimens only',
      'Territorial towards other bottom fish',
      'Impressive adult size and appearance',
      'Lives 15+ years with proper care',
      'For serious pleco collectors'
    ],
    detailedInfo: {
      description: 'Chocolate Plecos are large, beautiful catfish with rich brown coloration. Their size, aggression, and rarity make them challenging fish for experienced keepers.',
      size: '30-35 cm (12-14 inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '500+ litres (125+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '15+ years'
    }
  },
  {
    id: 'typhoon-pleco',
    name: 'Typhoon Pleco',
    category: 'Catfish',
    scientificName: 'Pseudacanthicus sp. "Typhoon"',
    compatibility: compatibilityMatrix['typhoon-pleco'] || {},
    quickFacts: [
      'Striking black and white wave patterns',
      'Large aggressive pleco species',
      'Extremely rare and expensive',
      'Requires pristine water conditions',
      'Carnivorous with powerful jaws',
      'Wild-caught specimens command high prices',
      'Territorial and aggressive to tank mates',
      'One of the most beautiful large plecos',
      'Long-lived with proper care',
      'Holy grail fish for collectors'
    ],
    detailedInfo: {
      description: 'Typhoon Plecos are among the most beautiful large catfish with striking black and white wave patterns. Their extreme rarity makes them ultimate collector fish.',
      size: '30-40 cm (12-16 inches)',
      temperament: 'Aggressive',
      diet: 'Carnivorous',
      tankSize: '500+ litres (125+ gallons)',
      waterParams: {
        temperature: '26-30°C (78-86°F)',
        ph: '6.0-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Advanced',
      lifespan: '20+ years'
    }
  },
  {
    id: 'tiger-pleco',
    name: 'Tiger Pleco',
    category: 'Catfish',
    scientificName: 'Panaqolus sp. "Tiger"',
    compatibility: compatibilityMatrix['tiger-pleco'] || {},
    quickFacts: [
      'Beautiful tiger-striped pattern',
      'Medium-sized peaceful pleco',
      'Excellent algae and wood eater',
      'Requires driftwood in tank',
      'More available than rare species',
      'Good community tank addition',
      'Active during both day and night',
      'Hardy and adaptable',
      'Captive breeding programs successful',
      'Popular with intermediate keepers'
    ],
    detailedInfo: {
      description: 'Tiger Plecos are attractive medium-sized catfish with distinctive tiger-stripe patterns. They offer beauty and functionality in community aquariums.',
      size: '12-15 cm (5-6 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-12 years'
    }
  },
  {
    id: 'marble-sailfin-pleco',
    name: 'Marble Sailfin Pleco',
    category: 'Catfish',
    scientificName: 'Pterygoplichthys joselimaianus',
    compatibility: compatibilityMatrix['marble-sailfin-pleco'] || {},
    quickFacts: [
      'Large pleco with beautiful marble patterns',
      'Impressive high dorsal fin',
      'Reaches 35+ cm (14+ inches)',
      'Peaceful but requires large tank',
      'Excellent algae eater',
      'Produces large amounts of waste',
      'Hardy and adaptable',
      'Available as captive-bred specimens',
      'Popular in large community tanks',
      'Long-lived species'
    ],
    detailedInfo: {
      description: 'Marble Sailfin Plecos are large, impressive catfish with beautiful marble patterns and distinctive high dorsal fins. They require large tanks but are peaceful community fish.',
      size: '35+ cm (14+ inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '500+ litres (125+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-20 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '15+ years'
    }
  },
  {
    id: 'flash-pleco',
    name: 'Flash Pleco',
    category: 'Catfish',
    scientificName: 'Panaqolus albomaculatus',
    compatibility: compatibilityMatrix['flash-pleco'] || {},
    quickFacts: [
      'Small pleco with distinctive white spots',
      'Peaceful and community-friendly',
      'Primarily wood-eating diet',
      'Requires driftwood and caves',
      'More affordable than rare species',
      'Good algae control',
      'Active during evening hours',
      'Hardy and beginner-friendly',
      'Easy to breed in captivity',
      'Popular starter pleco'
    ],
    detailedInfo: {
      description: 'Flash Plecos are small, attractive catfish with white spots on dark bodies. They are excellent community fish and provide natural algae control.',
      size: '10-12 cm (4-5 inches)',
      temperament: 'Peaceful',
      diet: 'Herbivorous',
      tankSize: '150+ litres (40+ gallons)',
      waterParams: {
        temperature: '24-28°C (75-82°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Beginner',
      lifespan: '8-10 years'
    }
  },
  {
    id: 'mega-clown-pleco',
    name: 'Mega Clown Pleco',
    category: 'Catfish',
    scientificName: 'Hypancistrus sp. "Mega Clown"',
    compatibility: compatibilityMatrix['mega-clown-pleco'] || {},
    quickFacts: [
      'Large version of the popular clown pleco',
      'Stunning black and orange banding',
      'Reaches 15-18 cm (6-7 inches)',
      'More expensive than regular clown plecos',
      'Requires caves and hiding spots',
      'Peaceful community fish',
      'Primarily protein diet',
      'Wild-caught specimens preferred',
      'Beautiful adult coloration',
      'Popular among pleco enthusiasts'
    ],
    detailedInfo: {
      description: 'Mega Clown Plecos are larger versions of the popular clown pleco with the same beautiful orange and black banding. Their increased size makes them more impressive specimens.',
      size: '15-18 cm (6-7 inches)',
      temperament: 'Peaceful',
      diet: 'Omnivorous',
      tankSize: '200+ litres (50+ gallons)',
      waterParams: {
        temperature: '25-29°C (77-84°F)',
        ph: '6.5-7.5',
        hardness: '5-15 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '10-15 years'
    }
  }
]

export const getSpeciesById = (id: string): Species | undefined => {
  return speciesData.find(species => species.id === id)
}

export const checkCompatibility = (species1Id: string, species2Id: string): CompatibilityRating => {
  const species1 = getSpeciesById(species1Id)
  if (!species1) return 'N'
  
  return species1.compatibility[species2Id] || 'N'
}

export const getCompatibleSpecies = (speciesId: string): Species[] => {
  const species = getSpeciesById(speciesId)
  if (!species) return []
  
  return speciesData.filter(s => 
    s.id !== speciesId && species.compatibility[s.id] === 'Y'
  )
}

export const getCautionSpecies = (speciesId: string): Species[] => {
  const species = getSpeciesById(speciesId)
  if (!species) return []
  
  return speciesData.filter(s => 
    s.id !== speciesId && species.compatibility[s.id] === 'C'
  )
}