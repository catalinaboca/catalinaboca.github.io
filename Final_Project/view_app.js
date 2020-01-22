class app_view
{
	events;
	constructor()
	{
		document.getElementById("id_button_V").addEventListener("click",this.on_click_navigation_V.bind(this));
		document.getElementById("id_button_VI").addEventListener("click",this.on_click_navigation_VI.bind(this));
		document.getElementById("id_button_VII").addEventListener("click",this.on_click_navigation_VII.bind(this));
		document.getElementById("id_button_VIII").addEventListener("click",this.on_click_navigation_VIII.bind(this));
	}
	set_events_list(events)
	{
		this.events=events;
	}
    on_click_navigation_V()
	{
		this.events.call_event("navigation_app_V");
	}
	 on_click_navigation_VI()
	{
		this.events.call_event("navigation_app_VI");
	}
	 on_click_navigation_VII()
	{
		this.events.call_event("navigation_app_VII");
	}
	 on_click_navigation_VIII()
	{
		this.events.call_event("navigation_app_VIII");
	}
     function get_menu_V()
	  {
      return setTimeout("window.open('Clasa_a_V_a.html')",1000);
      }
	   get_menu_VI()
	  {
       return setTimeout("window.open('C:/Users/beaut/Desktop/html/Final_Project/Clasa_a_VI_a.html')",1000);
      }
	   get_menu_VII()
	  {
       return setTimeout("window.open('C:/Users/beaut/Desktop/html/Final_Project/Clasa_a_VII_a.html')",1000);
      }
	   get_menu_VIII()
	  {
       return setTimeout("window.open('C:/Users/beaut/Desktop/html/Final_Project/Clasa_a_VIII_a.html')",1000);
      }
}