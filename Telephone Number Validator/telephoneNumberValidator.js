function telephoneCheck(str) {
    const validPatterns = [

        // 111-111-111 Format 
        /^\d{3}-\d{3}-\d{4}$/,

        // 1 555-555-5555 Format
        /^1 \d{3}-\d{3}-\d{4}$/,

        // 1 (111) 000-0000 Format
        /^1 \(\d{3}\) \d{3}-\d{4}$/,

        // 0000000000 Format
        /^\d{10}$/,

        // (000)000-0000 Format
        /^\(\d{3}\)\d{3}-\d{4}/,

        // 1 555 000 5555 Format
        /^1 \d{3} \d{3} \d{4}$/,

        //1(555)555-0000 Format
        /1\(\d{3}\)\d{3}-\d{4}/

    ]

    return validPatterns
        .some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");