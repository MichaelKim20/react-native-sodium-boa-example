import React, { Component } from 'react'

import Base64 from 'base64-js'
import Sodium from 'react-native-sodium-boa'

import {BasicTest} from './BasicTest';

export default class Test extends BasicTest
{
    constructor(props) {
        super(props);
    }

    async _crypto_scalarmult_Test() {
        let sample_crypto_scalarmult_ed25519_xxxxx = [
            {
                "s": "fab513dc7606da258fab805cc425c9ad89375b2bf2577b4af4e64a0c72646801",
                "p": "f737deed6665ef7565c12179477e28cb0cf342fbbc873c3b6de4f6dc673a181b",
                "scalarmult_ed25519_base": "bcf7fdc2d382c4b8a1c0ebbb15cb8b3be174b33a0cec5418cef12990bbf34dac",
                "scalarmult_ed25519_base_noclamp": "01388da3dbe4f7df095ae91b4be49dbaad60aef1773cf727976637fa215f6c3e",
                "scalarmult_ed25519": "0c79fc22f01b9dcdd8abf69b1fa7f4d7db639964edfa64630b4f540d77c14846",
                "scalarmult_ed25519_noclamp": "c1cc71b55bfa2f356cff930b3da25eb4575509e70ae12eaf51e4e1b1cf9cdb53"
            },
            {
                "s": "1dc93d33b52864a2a81c974b3b7f4229580d868a90385b1ae14dbc482c244802",
                "p": "db882cfdc35080f9c80903e868b96e0bf11e7a30a595baec2e4a40ee4aebb69d",
                "scalarmult_ed25519_base": "a72f9db253f99f4e1cc2f98a7252a9fc7505dc76cdecd14879bd1d15cedc94f2",
                "scalarmult_ed25519_base_noclamp": "ee95385bedd2ca85af0188ddf01ce385cce9a4b031458a0e7d2676e2bb0c5ec5",
                "scalarmult_ed25519": "14225b3e4b4c6656e3c75f9f47105e4e357f1509a36969fd97c90accdaac9dfe",
                "scalarmult_ed25519_noclamp": "67f88a0b58f11bf5c375fb6ae5b8d83a3e2d81e8d692094a957ec679837af2f9"
            },
            {
                "s": "7b100f4e3279605758730a6f81a0b43b48a0e04f622aea3d5bf8344408ba8a07",
                "p": "f0c43df4dac7665d58464f5b4f3239a3026b8ff4f72ccfcd96b9c1a00a0202a0",
                "scalarmult_ed25519_base": "563f6c757f454ebbb2ac57435a216c5e3e0fe0282d9909d8e919b0d1f256086a",
                "scalarmult_ed25519_base_noclamp": "e63ced72a710477d7552fb51683ba7a88df5cae1169ce318caf09ffbee3e4f88",
                "scalarmult_ed25519": "0be5c0146a18a7a3290170a407e9f0752cd458973d7f2c3e61c05d56c3daba8b",
                "scalarmult_ed25519_noclamp": "f8b72df5ec1c43232194aea76f9d91dd7204624526b571ec503283aac435761d"
            },
            {
                "s": "877c35ae9eac60e52634e912aecdff46e92f44e09c287ddf36bf1de2d14ddd0a",
                "p": "b061ca7531a47e6363e6ac15effd04713876cd2e13aca835fd137a2ae50ef79d",
                "scalarmult_ed25519_base": "bc93e699b59947c78e56edd0f145853619505f48e87b267b44daad503a019f47",
                "scalarmult_ed25519_base_noclamp": "786999366487187931acb61ad336e12c13cdbb9705ec91725760bc5006e60c4c",
                "scalarmult_ed25519": "c7d15184a6c315ce73e7a3fbf20f9b72b66164560ef578d158246cd497011897",
                "scalarmult_ed25519_noclamp": "03f3fd76176289984fc95753037eec43a85381080bcfbb1c8552efc84943321c"
            },
            {
                "s": "bfcb76ee14068cefc06312500ba630ee03164163f870fec67ee99217c0952100",
                "p": "09a10e3ab67bd950665b0b8c157ee648e19f3af012aab70bad4cca7c9d41b12b",
                "scalarmult_ed25519_base": "c7cebdc9cce9f6954528d8affbe92a2e7f2ebd317e6380d4eeddce5c697884b3",
                "scalarmult_ed25519_base_noclamp": "a6e5d964893033723150a8650938cf6bf1206dd598e56646f2a51861d6867eb3",
                "scalarmult_ed25519": "89b1769206b679a893336597b6fbea5624bea671e062a617d49068f4502163df",
                "scalarmult_ed25519_noclamp": "be8e2ba0c728fa1b50ae75afc77d1ad865ec8b48dbfca16ca0b4430ce060ff09"
            },
            {
                "s": "1d4e0eb53c574afa3d179862b6a08269a4f4cf5c3a1c28f83ffc342ff4358e05",
                "p": "77a2e1743dcea96c757ad6073ef6251adf6355da0cabc063e59c5605456cb02c",
                "scalarmult_ed25519_base": "bcd36c3dea377fac42851abc5aaca2ff1377bdb8a849c0a3ffd9c57d4c3e62e4",
                "scalarmult_ed25519_base_noclamp": "60968ed02062ca5800f26b25fdc06c89395cf81160c90f9cdc8fb67055a76e89",
                "scalarmult_ed25519": "537f9e9db7155ca5d4113838444eae7aba040f713d83fa7a0b09ecd10b29e2ef",
                "scalarmult_ed25519_noclamp": "ea7583b1d94ddd6eb88c390b9ec05ef282833f9a5dc7e03d966f7905afeb2412"
            },
            {
                "s": "d47275c3972459b7113a7cefa08440880292258b63a8a33e57d6c8c5bd89da01",
                "p": "96af814e896c3354508db50fb4d78bec41b095e44b690fb8e47c3b81d4ed1902",
                "scalarmult_ed25519_base": "164e432648ba3b0e420b9a857638f6a4839b575f3a0f5997835d661aab42119a",
                "scalarmult_ed25519_base_noclamp": "bfb65573768dc8f779ce6d3842a357dedfd1a0ea12ac9f55e6560fff7dacba9f",
                "scalarmult_ed25519": "f044fc4d557bdcb3dd5111946b9fcd450baf5183e36764cd846e0d56e867057e",
                "scalarmult_ed25519_noclamp": "60308666e37a7c9db06ac8e755190327c801a132d9f20af9d4a47a4cc74bb918"
            },
            {
                "s": "a744355318807ba7eeac9dc1eca959b138c812fcc31f1b02aa788da258159206",
                "p": "8c5f70a2e9803b16f460348f9d7519ce49eb856285897332c0ddc15fb8859cd0",
                "scalarmult_ed25519_base": "2c01645faf2b39adf0243f8aad58b47bf9a8e65d23cbf7d4a082767a21687d20",
                "scalarmult_ed25519_base_noclamp": "5fcf25a0f31921f168790a1af03cc6de6221f124956c09326c6a2b2a3e575c13",
                "scalarmult_ed25519": "88a90c67759cebce03a3732169b5ec61d05d86aebe1475a4f9128fb8204bbfc6",
                "scalarmult_ed25519_noclamp": "09eaa043a71e89b11be20ae047c8b422ef7302a7c49252afaf0b98eb87551f44"
            },
            {
                "s": "2dfad98201a7e88b847adcd77083b530801f502705b06d1cbbc32e88e87ce201",
                "p": "5bcaa7b9f9be3eab637852cdef7df5a67ab9fd3fdddf088d0c5a2678b78f0f77",
                "scalarmult_ed25519_base": "35c75f6a2f679b9da0474314fae6a07a5f7634f446f7275ec50083cb6a400b0e",
                "scalarmult_ed25519_base_noclamp": "f46bdbfc6051b4e61f75a5550d9e147cc2b22c1aaab62869d7464945a160c5fd",
                "scalarmult_ed25519": "e034eae04cff4c328b81823fe13ab2ecf50e42bfadeaf848183ce5aef6017624",
                "scalarmult_ed25519_noclamp": "a4bcf65109f745bc96414c497a6c58ea0f2b1034ec61b7aa35114e74cc599203"
            },
            {
                "s": "9fb9802df2ee53aad264df2ff10de69e07823d9532ae011e3d437a525ab38107",
                "p": "6c81715643fc7c5220b3725fb4944d4ef380801f50f3782de47293d9540db355",
                "scalarmult_ed25519_base": "51e12ab1bd19e89512c8f2d0d8f3abf7947507bd13aacf0769ed10bea31354ca",
                "scalarmult_ed25519_base_noclamp": "86952c60dae346a052170f8db9acb93970af4ce95d2d1122e91375d4d4e06790",
                "scalarmult_ed25519": "379c5b2ba7e1bc7748b831ad602afce0c843e0b06d06a2609714cb7afc7c3c1c",
                "scalarmult_ed25519_noclamp": "b9b3eb20213d6e3205629d9422ed81676cc30f619bc92dbc24efad161c199b06"
            }
        ];

        let results: Array;
        results = sample_crypto_scalarmult_ed25519_xxxxx.map(t => {
            let q = Sodium.crypto_scalarmult_ed25519_base_sync(Base64.fromByteArray(this.hex2bin(t.s)));
            try {
                let response = JSON.parse(q);
                return t.scalarmult_ed25519_base === this.bin2hex(Base64.toByteArray(response.data));
            } catch (e) {
                return false;
            }
        });
        this.testPassed('crypto_scalarmult_ed25519_base_sync', results.find(t => t === false) === undefined);

        results = sample_crypto_scalarmult_ed25519_xxxxx.map(t => {
            let q = Sodium.crypto_scalarmult_ed25519_base_noclamp_sync(Base64.fromByteArray(this.hex2bin(t.s)));
            try {
                let response = JSON.parse(q);
                return t.scalarmult_ed25519_base_noclamp === this.bin2hex(Base64.toByteArray(response.data));
            } catch (e) {
                return false;
            }
        });
        this.testPassed('crypto_scalarmult_ed25519_base_noclamp_sync', results.find(t => t === false) === undefined);

        results = sample_crypto_scalarmult_ed25519_xxxxx.map(t => {
            let q = Sodium.crypto_scalarmult_ed25519_sync(Base64.fromByteArray(this.hex2bin(t.s)), Base64.fromByteArray(this.hex2bin(t.p)));
            try {
                let response = JSON.parse(q);
                return t.scalarmult_ed25519 === this.bin2hex(Base64.toByteArray(response.data));
            } catch (e) {
                return false;
            }
        });
        this.testPassed('crypto_scalarmult_ed25519_sync', results.find(t => t === false) === undefined);

        results = sample_crypto_scalarmult_ed25519_xxxxx.map(t => {
            let q = Sodium.crypto_scalarmult_ed25519_noclamp_sync(Base64.fromByteArray(this.hex2bin(t.s)), Base64.fromByteArray(this.hex2bin(t.p)));
            try {
                let response = JSON.parse(q);
                return t.scalarmult_ed25519_noclamp === this.bin2hex(Base64.toByteArray(response.data));
            } catch (e) {
                return false;
            }
        });
        this.testPassed('crypto_scalarmult_ed25519_noclamp_sync', results.find(t => t === false) === undefined);
    }

    componentDidMount() {
        this.initTests([
            'crypto_scalarmult_ed25519_base_sync',
            'crypto_scalarmult_ed25519_base_noclamp_sync',
            'crypto_scalarmult_ed25519_sync',
            'crypto_scalarmult_ed25519_noclamp_sync'
        ])

        this._crypto_scalarmult_Test()
    }
}
