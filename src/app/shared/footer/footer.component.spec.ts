import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { infoFooterService } from 'src/app/services/info-footer/info-footer.service';
import { infoServiceResponse } from 'src/app/services/info-footer/info-service.mocks';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;
	let service: infoFooterService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FooterComponent],
			imports: [HttpClientTestingModule],
		}).compileComponents();

		service = TestBed.inject(infoFooterService);
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render footer with info from API', () => {
		spyOn(service, 'fetchFooterData').and.returnValue(of(infoServiceResponse));

		component.ngOnInit();
		fixture.detectChanges();

		expect(service.fetchFooterData).toHaveBeenCalledWith();
		expect(component.info).toEqual(
			jasmine.objectContaining(infoServiceResponse),
		);

		const emailComponent: HTMLAnchorElement =
			fixture.debugElement.nativeElement.querySelector('.email');
		const telComponent: HTMLSpanElement =
			fixture.debugElement.nativeElement.querySelector('.tel');
		const emailHref = decodeURI(emailComponent.href);

		expect(emailComponent?.textContent?.trim()).toEqual(
			infoServiceResponse.contact.email,
		);
		expect(emailHref).toContain(infoServiceResponse.contact.email);
		expect(emailHref).toContain(infoServiceResponse.subject_matter);
		expect(emailHref).toContain(infoServiceResponse.comment);

		expect(telComponent?.textContent?.trim()).toEqual(
			infoServiceResponse.contact.tel,
		);
	});
});
