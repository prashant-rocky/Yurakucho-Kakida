
window.addEventListener("load", function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Fuunji Shinjuku",
            website_privacy_policy_url: "/privacy"
        });

        // ✅ Attach click event to open preferences
        const prefLink = document.getElementById("open_preferences_center");
        if (prefLink) {
            prefLink.addEventListener("click", function (e) {
                e.preventDefault();
                if (window.cookieconsent.preferences) {
                    window.cookieconsent.preferences.show(); // ✅ Opens preferences center
                }
            });
        }
    }
});
