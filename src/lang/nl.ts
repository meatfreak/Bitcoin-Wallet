/* eslint-disable no-unused-vars */

import Language from '@/lang/langInterface'

/* eslint-enable no-unused-vars */

var en = <Language> {
    // Initial page
    getting_started: 'Beginnen',
    create_new: 'Maak nieuwe portemonnee',
    create_subtext: "We maken een nieuwe portemonnee aan zodat je Bitcoin kunt gaan gebruiken.",
    restore_existing: 'Herstel bestaande portemonnee',
    restore_subtext: "Je hebt al een portemonnee en wilt je herstelwoorden gebruiken om het te herstellen.",
    change_language: 'Kies taal',
    choose_language: 'Kies Taal',

    // Create page
    seed_phrase: "Herstelwoorden",
    wrote_it_down: 'Ik heb het opgeschreven',
    generate: 'Genereren',
    warning: 'Waarschuwing',
    we_will_generate: 'We zullen 12 herstelwoorden voor je genereren.',
    warning_text_1: "Schrijf de woorden in de juiste volgorde op en houd ze veilig, offline. Als je deze woorden verliest, heb je geen toegang meer tot je Bitcoin.",
    warning_text_2: "Met deze herstelwoorden kan je je portemonnee terugkrijgen. Schrijf de woorden op en houd ze veilig, offline.",
    write_it_down: 'Noteer het',
    keep_it_safe: 'Bewaar het veilig',
    do_not_lose_it: 'Verlies het niet',
    have_saved: 'Ik heb mijn herstelwoorden veilig opgeslagen.',

    // Restore page
    restore_notice: 'Voer je herstelwoorden in om je portemonnee te herstellen.',
    restore_warning: 'De opgegeven herstelwoorden zijn ongeldig. Woorden moeten correct worden gespeld en geen hoofdletters hebben.',
    restoring: 'Herstellen...',

    // Wallet home
    refresh: 'Vernieuwen',
    overview: 'Overzicht',
    send: 'Verstuur',
    receive: 'Ontvang',
    settings: 'Instellingen',
    amount_to_send: 'Te versturen bedrag',
    not_enough_balance: 'Niet genoeg saldo om dat bedrag te sturen',
    send_max: 'Verstuur max',
    amount: 'Bedrag',
    miner_fee: 'Netwerkkosten',
    total: 'Totaal',
    confirmation: 'Bevestiging',
    they_receive: 'Zij ontvangen',
    recepient: 'Ontvanger',
    sending: 'Versturen...',
    are_you_sure: 'Weet je zeker dat je deze transactie wilt versturen?',
    im_sure: "Ja, ik ben er zeker van, verstuur",
    seed_modal: 'Herstelwoorden',
    transaction: 'transactie',
    transactions: 'transacties',
    buy_bitcoin: 'Koop Bitcoin',

    // Pagination
    page: 'Page', // Displayed as 'Page 1 of 1'
    of: 'of',

    // Overview
    total_balance: "Total Balance",
    no_transactions: "You have not made any transactions yet",
    what_to_do: "What would you like to do?",
    date: 'Date',
    status: 'Status',
    processing: 'Processing',
    unconfirmed: 'Unconfirmed',
    complete: 'Compleet',

    // Send
    send_to: 'Send only to Bitcoin (BTC) addresses',
    bitcoin_address: 'Bitcoin address',
    address: 'Address',
    low_priority: 'Low priority',
    standard: 'Standard',
    important: 'Important',
    low_priority_desc: "You pay less in fees, but you consider this a low-priority transaction and you don't mind possibly waiting longer for confirmation.",
    standard_desc: "This will use a moderate fee, during times of high congestion this may lead to longer confirmation time, but these are rare.",
    important_desc: "Uses a premium fee to target confirmation within 30 minutes, this is a high priority transaction and you want it confirmed quickly.",
    not_enough: "You don't have enough to send that amount and also pay the network fee. Try sending your entire balance with the Send Max button instead.",
    dust_error: "The amount you are trying to send is too small for the Bitcoin network to process.",
    bitcoin_network_fee: "Bitcoin Network fee",

    // Receive
    receive_only: 'Ontvang enkel Bitcoin',
    wallet_address: 'Portemonneeadres',
    address_below: 'naar onderstaand adres',

    // Settings
    show_seed: 'Herstel',
    language: 'Taal',
    currency: 'Valuta',
    exit_wallet: 'Exit wallet',

    // Buttons
    back_button: 'Terug',
    restore_button: 'Herstel',
    next_button: 'Volgende',
    ok_button: 'OK',
    copy_button: 'Kopieer',
    save_button: 'Bewaar',

    // Notification
    notification_title: 'Incoming Transaction',

    // Exit wallet
    exit_text: 'This will destroy your wallet files and all records of your transactions. The only way to restore your wallet will be through your recovery words',
    exit_are_you_sure: 'Are you sure you want to delete and exit this wallet?',
    exit_label_text: 'Yes, delete this wallet',
    exit_delete: 'Delete'
}

export default en
