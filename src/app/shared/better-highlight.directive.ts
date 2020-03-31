import {
	Directive,
	Renderer2,
	OnInit,
	ElementRef,
	HostListener,
	HostBinding,
	Input
} from "@angular/core";

@Directive({
	selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: string = "transparent";
	@Input() highlightColor: string = "red";
	@HostBinding("style.backgroundColor") backgroundColor: string = this
		.defaultColor;
	@HostListener("mouseenter") mouseover(eventData: Event) {
		/* this.renderer.setStyle(this.elRef.nativeElement, "color", "white"); */
		this.backgroundColor = this.highlightColor;
	}
	@HostListener("mouseleave") mouseleave(eventData: Event) {
		/* this.renderer.setStyle(this.elRef.nativeElement, "color", "black"); */
		this.backgroundColor = this.defaultColor;
	}
	constructor(private elRef: ElementRef, private renderer: Renderer2) {}
	ngOnInit() {
		/* 	this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "blue"); */
		this.backgroundColor = this.defaultColor;
	}
}
