var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/light_theme.css";
    let darkTheme = "css/dark_theme.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark_theme";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light_theme";
    }

    link.setAttribute("href", currTheme);

    Save();
}