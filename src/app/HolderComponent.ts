export class HolderComponent {
  places;

  constructior(
    private holderSeervice : HolderService)
    {

    }

    ngOnInit(){
      this.places = this.cartService.getItems();
    }
}