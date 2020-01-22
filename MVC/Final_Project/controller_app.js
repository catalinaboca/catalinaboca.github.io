class app_controller_V
{
view;
  constructor(view)
	{
		this.view=view;
		var events=new app_events();
		events.add_event("navigation_app_V",this.on_click_menu_V.bind(this));
		this.view.set_events_list(events);
	}
		
	on_click_menu_V()
	{
		this.view.get_menu_V();
	}
	
}
const app_V=new app_controller_V(new app_view());
class app_controller_VI
{
view;
  constructor(view)
	{
		this.view=view;
		var events=new app_events();
		events.add_event("navigation_app_VI",this.on_click_menu_VI.bind(this));
		this.view.set_events_list(events);
	}
		
	on_click_menu_VI()
	{
		this.view.get_menu_VI();
	}
	
}
const app_VI=new app_controller_VI(new app_view());
class app_controller_VII
{
view;
  constructor(view)
	{
		this.view=view;
		var events=new app_events();
		events.add_event("navigation_app_VII",this.on_click_menu_VII.bind(this));
		this.view.set_events_list(events);
	}
		
	on_click_menu_VII()
	{
		this.view.get_menu_VII();
	}
	
}
const app_VII=new app_controller_VII(new app_view());
class app_controller_VIII
{
view;
  constructor(view)
	{
		this.view=view;
		var events=new app_events();
		events.add_event("navigation_app_VIII",this.on_click_menu_VIII.bind(this));
		this.view.set_events_list(events);
	}
		
	on_click_menu_VIII()
	{
		this.view.get_menu_VIII();
	}
	
}
const app_VIII=new app_controller_VIII(new app_view());